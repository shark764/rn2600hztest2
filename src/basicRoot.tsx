import React from 'react';
import { Text, View } from 'react-native';
import { Voice } from './components/reporting/historical/Voice';

interface Props {
  ext: 'in' | 'out';
}

export const BasicRoot = (props: Props) => (
  <View>
    <Text>{props.ext.toUpperCase()}</Text>
    <Voice isActive={props.ext === 'in'} />
  </View>
);
