import { getDatabase, onValue, ref, remove, set } from 'firebase/database';
import { Message } from '@/lib/types';
import { useEffect, useState, useTransition } from 'react';
import { messagesDBName, firebaseApp } from '@/lib/firebase';
import { v4 as uuid } from 'uuid';
import { useSession } from 'next-auth/react';

export function useMessages() {
  const { data: session } = useSession();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSending, startSend] = useTransition();
  const [isDeleting, startDelete] = useTransition();

  const database = getDatabase(firebaseApp);

  const onSendMessage = (message: string) => startSend(
    async () => {
      if (!session) return;

      const messageId = uuid();
      const messageRef = ref(database, `${messagesDBName}/${messageId}`);

      await set(messageRef, {
        id: messageId,
        name: session?.user?.name,
        email: session?.user?.email,
        image: session?.user?.image,
        message: message.trim(),
        created_at: new Date().toISOString(),
      } as Message);
    }
  );

  const onDeleteMessage = (id: string) => startDelete(
    async () => {
      const messageRef = ref(database, `${messagesDBName}/${id}`);

      if (messageRef) await remove(messageRef);
    }
  );

  // handle realtime values from Firebase Realtime Database
  useEffect(() => {
    const messagesRef = ref(database, messagesDBName);

    onValue(messagesRef, (snapshot) => {
      const messagesData = snapshot.val();
      if (!messagesData) return;

      const messagesList = Object.values(messagesData) as Message[];
      const sortedMessages = messagesList.sort((a, b) => {
        const dateA = new Date(a.created_at);
        const dateB = new Date(b.created_at);

        return dateA.getTime() - dateB.getTime();
      });

      setMessages(sortedMessages);
    });
  }, [database]);

  // handle auto scrolling to end of chats
  useEffect(() => {
    const messagesWrapper = document.getElementById('messages-wrapper');
    if (!messagesWrapper) return;

    messagesWrapper.scrollTo({
      top: messagesWrapper.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  return { messages, onSendMessage, onDeleteMessage, isSending, isDeleting };
}
