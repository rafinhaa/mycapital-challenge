import {Text, TouchableOpacity} from 'react-native';
import styled, {css} from 'styled-components/native';

export type ButtonTypeProps = 'primary' | 'secondary';

type ButtonOpacityProps = {
  type: ButtonTypeProps;
};

export const ButtonOpacity = styled(TouchableOpacity)<ButtonOpacityProps>`
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-size: 20px;
  padding: 8px;

  ${({theme: {colors}, type}) =>
    type === 'primary'
      ? css`
          color: ${colors.background};
          background-color: ${colors.primary};
        `
      : css`
          color: ${colors.title};
          background-color: ${colors.background};
          border: 1px solid ${colors.primary};
        `}
`;

export const Title = styled(Text)<ButtonOpacityProps>`
  color: ${({
    theme: {
      colors: {background, primary},
    },
    type,
  }) => (type === 'primary' ? background : primary)};
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: 24px;
`;
