import React from 'react';
import {View} from 'react-native';

import {
  LeftInfos,
  CardContainer,
  Info,
  Props,
  RightContent,
  Value,
} from './styles';
import {ActionCardProps} from './types';

export const ActionCard: React.FC<ActionCardProps> = ({code, name, value}) => {
  const valueInRealBrazilian = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(value));

  return (
    <CardContainer>
      <View>
        <LeftInfos>
          <Props>Código:</Props>
          <Info>{code}</Info>
        </LeftInfos>
        <LeftInfos>
          <Props>Nome:</Props>
          <Info>{name}</Info>
        </LeftInfos>
      </View>

      <RightContent>
        <Props>Valor:</Props>
        <Value>{valueInRealBrazilian}</Value>
      </RightContent>
    </CardContainer>
  );
};
