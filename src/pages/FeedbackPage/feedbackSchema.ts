import z from 'zod';

const feedbackSchema = z.object({
  mood: z.enum(['veryhappy', 'happy', 'neutral', 'unhappy', 'angry']),
  message: z.string(),
  email: z.string().email('Введите корректный email').optional(),
  agreement: z.boolean().refine((val) => val === true, {
    message: 'Вы должны согласиться с обработкой данных',
  }),
});

export default feedbackSchema;
