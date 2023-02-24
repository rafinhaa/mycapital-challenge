import React from 'react';
import {Text, View} from 'react-native';

import {BaseScreen} from '../../components/BaseScreen';

export const Home: React.FC = () => {
  return (
    <BaseScreen>
      <View>
        <Text style={{color: 'white'}}>Home</Text>
      </View>
    </BaseScreen>
  );
};
