import styled from 'styled-components/native';

export const Content = styled.Text`
  text-align: center;
  justify-content: center;
  font-size: 30px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.primary};
  margin: 16px 0px;
`;
