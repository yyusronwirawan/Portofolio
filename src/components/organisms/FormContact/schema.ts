import { z } from 'zod';

export const schemaContact = z.object({
  name: z
    .string()
    .min(1, 'Name is required'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Email is invalid'),
  message: z
    .string()
    .min(1, 'Message is required')
    .min(10, 'At least 10 characters')
});

export type SchemaContact = z.infer<typeof schemaContact>;
