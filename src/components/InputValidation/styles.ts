import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 14px;
`;

export const Error = styled.Text`
  font-size: 14px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.primary};
`;
