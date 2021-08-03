import React from 'react';
import { View, Text } from 'react-native';
import { Voice } from '@/components/reporting/historical/Voice';
import { BasicRoot } from '@/basicRoot';
import { StyledExample } from '@/styles/StyledExample';

interface Props {
  phone: string;
  id: string;
}

export const Calls = (props: Props) => (
  <View>
    {/* <Text>{props.id}</Text>
    <Text>{props.phone}</Text>
    <Voice isActive />
    <BasicRoot ext="in" />
    <BasicRoot ext="out" /> */}
    <StyledExample prop1="Hello World" />
  </View>
);
