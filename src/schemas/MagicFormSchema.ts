import { z } from 'zod';

export const MagicFormSchema = z.object({
  comandante: z.string().trim().min(1, 'Commander non inserito.'),
});
