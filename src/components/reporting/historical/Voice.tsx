import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  isActive: boolean;
}

export const Voice = (props: Props) => (
  <View>
    <Text style={{ ...styles.voice, ...(!props.isActive ? styles.inactive : {}) }}>
      {props.isActive ? 'Active' : 'Inactive'}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  voice: { backgroundColor: '#12dc90', color: '#451ac5' },
  inactive: { backgroundColor: '#37912d', color: '#16f9fa', fontStyle: 'italic' },
});
