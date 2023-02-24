import styled from 'styled-components/native';

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: 20px;
  margin-bottom: 4px;
`;
