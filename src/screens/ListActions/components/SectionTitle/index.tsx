import React from 'react';

import {Title} from './styles';
import {SectionTitleProps} from './types';

export const SectionTitle: React.FC<SectionTitleProps> = ({children}) => {
  return <Title>{children}</Title>;
};
