import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{5,29}$/gim;

export const singUpSchema = z.object({
  username: z.string().regex(userNameRegex, 'Usuário inválido').min(3, 'Nome de usuário obrigatório'),
  fullName: z
    .string()
    .min(3, 'Nome completo obrigatório')
    .transform(value => {
      return value.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
    }),
  email: z.string().email('E-mail obrigatório'),
  password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
});

export type SingUpSchemaType = z.infer<typeof singUpSchema>;
