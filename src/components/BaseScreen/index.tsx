import React from 'react';

import {Container} from './styles';
import {BaseScreenProps} from './types';

export const BaseScreen: React.FC<BaseScreenProps> = ({children}) => {
  return <Container>{children}</Container>;
};
