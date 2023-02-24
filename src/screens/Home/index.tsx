import React from 'react';
import {View} from 'react-native';

import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {actionCreateSchema} from './schema';

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

  const handleCreateNewAction = async (data: ActionCreateFormData) => {
    try {
      reset();
    } catch (error) {
      console.log(error);
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
