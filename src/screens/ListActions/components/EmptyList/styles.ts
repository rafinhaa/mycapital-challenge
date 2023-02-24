import styled from 'styled-components/native';
import {MagnifyingGlass} from 'phosphor-react-native';

export const Container = styled.View`
  margin-top: 80px;
  align-items: center;
`;

export const EmptyIcon = styled(MagnifyingGlass).attrs(({theme}) => ({
  size: 60,
  color: theme.colors.title,
}))``;

export const Title = styled.Text`
  font-size: 20px;
  color: ${({theme}) => theme.colors.title};
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.colors.titleSecondary};
`;
