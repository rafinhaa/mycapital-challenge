import React from 'react';

import {InputContainer, InputText, Title} from './styled';
import {InputTextProps} from './types';

export const Input: React.FC<InputTextProps> = ({title, ...rest}) => {
  return (
    <InputContainer>
      <Title>{title}</Title>
      <InputText {...rest} />
    </InputContainer>
  );
};
