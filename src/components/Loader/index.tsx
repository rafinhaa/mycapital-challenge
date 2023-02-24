import React from 'react';
import {ActivityIndicator, ActivityIndicatorContainer} from './styles';

export const Loader: React.FC = () => {
  return (
    <ActivityIndicatorContainer>
      <ActivityIndicator />
    </ActivityIndicatorContainer>
  );
};
