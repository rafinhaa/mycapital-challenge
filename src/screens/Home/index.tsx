import React from 'react';
import {View} from 'react-native';

import {BaseScreen} from '../../components/BaseScreen';
import {Button} from '../../components/Button';
import {Input} from '../../components/Input';
import {TitleScreen} from '../../components/TitleScreen';
import {Content} from './styles';

export const Home: React.FC = () => {
  return (
    <BaseScreen>
      <Content>
        <View>
          <TitleScreen>Cadastrar ação</TitleScreen>
          <Input
            title="Código"
            autoCapitalize="characters"
            autoCorrect={false}
          />
          <Input title="Nome" autoCorrect={false} />
          <Input
            title="Data da compra"
            autoCorrect={false}
            placeholder="dd/mm/aaaa"
          />
          <Input
            title="Valor da compra"
            autoCorrect={false}
            keyboardType="numeric"
          />
        </View>
        <Button title="Cadastrar" type="primary" />
      </Content>
    </BaseScreen>
  );
};
