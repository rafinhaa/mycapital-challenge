import axios from 'axios';

type Holidays = {
  date: string;
  name: string;
  type: string;
}[];

export const getHolidays = async (year: string) => {
  try {
    const {data: holidays} = await axios.get<Holidays>(
      `https://brasilapi.com.br/api/feriados/v1/${year}`,
    );

    return holidays;
  } catch (error) {
    throw new Error('Aconteceu um erro ao validar se a data é um feriado');
  }
};
