import React from 'react';

import {Content} from './styles';
import {TitleScreenProps} from './types';

export const TitleScreen: React.FC<TitleScreenProps> = ({children}) => {
  return <Content>{children}</Content>;
};
