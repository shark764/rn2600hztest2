import React from 'react';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import LibraryTest, { Button, TextInfo } from 'rn-library-test-aug17';
import { Calls } from './modules/reporting/historical/Calls';

export function App () {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    runMultiply();
  }, []);

  const runMultiply = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    LibraryTest.multiply(3, 7).then(setResult);
  };

  const runDivide = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    LibraryTest.divide(3, 7).then(setResult);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <TextInfo color="blue" size="large">
            Result: {result}
          </TextInfo>
          <Button onPress={runDivide} title="Divide this shit!" />

          <Button onPress={runMultiply} title="Multiply this shit!" color="#967d12" />
        </View>

        <View style={styles.container}>
          {/* <Text>Open up App.tsx to start working on your app!</Text> */}
          <Calls id="1234" phone="+503" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 90,
  },
});
