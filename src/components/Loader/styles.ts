import styled from 'styled-components/native';

export const ActivityIndicatorContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs(({theme}) => ({
  color: theme.colors.primary,
  size: 'large',
}))``;
