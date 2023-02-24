import React from 'react';

import {ButtonProps} from './types';

import {ButtonOpacity, Title} from './styled';

export const Button: React.FC<ButtonProps> = ({title, type, ...rest}) => {
  return (
    <ButtonOpacity type={type} {...rest}>
      <Title type={type}>{title}</Title>
    </ButtonOpacity>
  );
};
