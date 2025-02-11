import {z} from 'zod';

export const loginSchema = z.object({
  email: z.string().email('E-mail obrigatório'),
  password: z.string().min(1, 'Senha obrigatória'),
});
export type LoginSchemaType = z.infer<typeof loginSchema>;
