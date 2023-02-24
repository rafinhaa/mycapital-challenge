import styled from 'styled-components/native';

export const InputContainer = styled.View`
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: 16px;
  padding: 0px 0px 2px;
`;

export const InputText = styled.TextInput`
  color: ${({theme}) => theme.colors.title};
  background-color: ${({theme}) => theme.colors.secondary};
  border-radius: 8px;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: 20px;
  padding: 6px 4px;
`;
