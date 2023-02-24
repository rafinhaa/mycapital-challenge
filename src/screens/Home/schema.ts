import {z} from 'zod';

export const actionCreateSchema = z.object({
  code: z
    .string({
      required_error: 'Digite o código da ação',
    })
    .length(5, {
      message: 'O código da ação deve conter 5 caracteres',
    }),
  name: z.string({
    required_error: 'Digite o nome da ação',
  }),
  date: z
    .string({
      required_error: 'Digite a data da compra',
    })
    .refine(date => {
      const regex = /^\d{2}\/\d{2}\/\d{4}$/;
      return regex.test(date) ? date : false;
    }, 'O formato deve ser dd/mm/aaaa'),
  value: z
    .string()
    .refine(
      val => /^\d{1,3}(\.\d{3})*(\,\d{2})?$|^\d+$/.test(val),
      'O Valor inválido! Deve por exemplo 500 ou 500,00',
    )
    .transform(val => val.replace(/\./g, '').replace(',', '.')),
});
