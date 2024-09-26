'use server';

import { signIn } from '@/auth';

type SignInMethod = 'google' | 'github';

export async function signInFromServer(method: SignInMethod) {
  await signIn(method);
}
