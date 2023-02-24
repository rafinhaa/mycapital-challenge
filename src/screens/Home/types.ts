import {z} from 'zod';
import {actionCreateSchema} from './schema';

export type ActionCreateFormData = z.infer<typeof actionCreateSchema>;
