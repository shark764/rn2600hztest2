import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { Icon } from '@/modules/elements/icon';

const Container = styled.View`
  /* flex: 1; */
  background-color: #04b93bfd;
  /* align-items: center; */
  /* justify-content: center; */
`;
const SText = styled.Text`
  font-size: 18px;
  color: #e00ea1;
  font-weight: 800;
`;

interface Props {
  prop1: string;
}

export const StyledExample: React.FunctionComponent<Props> = (props): React.ReactElement => (
  <View>
    <Text>{props.prop1}</Text>

    <Container>
      <SText>Hey there, how are you?</SText>

      <Icon name="audio" />
    </Container>
  </View>
);
