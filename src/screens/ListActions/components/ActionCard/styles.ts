import styled from 'styled-components/native';

export const CardContainer = styled.View`
  background-color: ${({theme}) => theme.colors.secondary};
  border-radius: 8px;
  margin: 2px 0px;
  padding: 8px 4px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Value = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: 24px;

  align-items: center;
`;

export const Info = styled.Text`
  color: ${({theme}) => theme.colors.title};
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: 14px;

  align-items: center;
`;

export const Props = styled.Text`
  color: ${({theme}) => theme.colors.background};
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: 16px;

  align-items: center;
`;

export const LeftInfos = styled.View`
  flex-direction: row;
  gap: 4px;

  align-items: center;
`;

export const RightContent = styled.View`
  flex-direction: row;
  gap: 4px;

  align-items: center;
`;
