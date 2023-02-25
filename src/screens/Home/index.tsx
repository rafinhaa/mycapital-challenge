import React from 'react';
import {Alert, View} from 'react-native';

import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import uuid from 'react-native-uuid';

import {actionCreateSchema} from './schema';
import {actionCreate} from '../../storage/action';
import {getHolidays} from '../../services/getHolidays';

import {ActionCreateFormData} from './types';

import {BaseScreen} from '../../components/BaseScreen';
import {Button} from '../../components/Button';
import {TitleScreen} from '../../components/TitleScreen';
import {InputValidation} from '../../components/InputValidation';

import {Content} from './styles';

export const Home: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<ActionCreateFormData>({
    resolver: zodResolver(actionCreateSchema),
  });

  const selectedDateIsHoliday = async (date: string) => {
    try {
      const year = date.split('/')[2];
      const formattedDate = `${year}-${date.split('/')[1]}-${
        date.split('/')[0]
      }`;
      const holidays = await getHolidays(year);
      const isHoliday = holidays.some(
        holiday => holiday.date === formattedDate,
      );

      if (isHoliday) {
        throw new Error('A data escolhida é um feriado');
      }
    } catch (error) {
      throw error;
    }
  };

  const handleCreateNewAction = async (data: ActionCreateFormData) => {
    try {
      await selectedDateIsHoliday(data.date);

      await actionCreate({
        id: uuid.v4().toString(),
        ...data,
      });

      Alert.alert('Sucesso!', 'A ação foi cadastrada!');
      reset();
    } catch (error) {
      Alert.alert('Erro!', `Não foi possível cadastrar a ação: ${error}`);
    }
  };

  return (
    <BaseScreen>
      <Content>
        <View>
          <TitleScreen>Cadastrar ação</TitleScreen>
          <InputValidation
            name="code"
            control={control}
            error={errors.code && errors.code.message}
            title="Código"
            autoCapitalize="characters"
            autoCorrect={false}
            maxLength={5}
          />
          <InputValidation
            name="name"
            control={control}
            error={errors.name && errors.name.message}
            title="Nome"
            autoCorrect={false}
          />
          <InputValidation
            name="date"
            control={control}
            error={errors.date && errors.date.message}
            title="Data da compra"
            autoCorrect={false}
            placeholder="dd/mm/aaaa"
            maxLength={10}
          />
          <InputValidation
            name="value"
            control={control}
            error={errors.value && errors.value.message}
            title="Valor da compra"
            autoCorrect={false}
            keyboardType="numeric"
          />
        </View>
        <Button
          title="Cadastrar"
          type="primary"
          onPress={handleSubmit(handleCreateNewAction)}
        />
      </Content>
    </BaseScreen>
  );
};
