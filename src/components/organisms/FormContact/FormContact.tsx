'use client';

import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Atoms } from '@/components/atoms';
import { schemaContact, SchemaContact } from './schema';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/molecules';
import { sendMessage } from '@/services';
import { toast } from 'sonner';

export function FormContact() {
  const form = useForm<SchemaContact>({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
    resolver: zodResolver(schemaContact),
    mode: 'onChange',
  });
  const { isSubmitting } = form.formState;

  const onSubmit = async (values: SchemaContact) => {
    const result = await sendMessage(values);

    if (result.error) {
      toast.error('Failed', { description: result.error });
      return;
    }

    toast.success('Success', { description: result.success });
    form.reset();
  };

  return (
    <Form {...form}>
      <form className='flex flex-col gap-6' onSubmit={form.handleSubmit(onSubmit)}>
        <div className='space-y-3'>
          <div className='grid lg:grid-cols-2 gap-3'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Atoms.Input placeholder='Input your name.' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Atoms.Input placeholder='Input your email.' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Atoms.Textarea placeholder='Type your message here.' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Atoms.Button
          type='submit'
          className='w-full lg:max-w-xs'
          loading={isSubmitting}
        >
          <Send className='size-4 mr-2' /> Send
        </Atoms.Button>
      </form>
    </Form>
  );
}

