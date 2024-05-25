import { z } from 'zod';

export const schema = z.object({
    name: z.string().default('Helloworld'),
    email: z.string().email()
});