import {z} from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.string().email('E-mail obrigatório'),
});
export type ForgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>;
