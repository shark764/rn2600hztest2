import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { Icon2 } from '@/modules/elements/icon2';
import { Icon } from '@/modules/elements/icon';

const Container = styled.View`
  /* flex: 1; */
  background-color: #0486b9fc;
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
    {/* <Text>{props.prop1.toUpperCase()}</Text> */}

    <Container>
      {/* <SText>Hey there, how are you?</SText> */}

      {/* <Icon name="svg-book" /> */}
      <Icon2 name="svg-book" />
    </Container>
  </View>
);
