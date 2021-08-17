import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Button } from 'react-native';
import LibraryTest, { Button as Button2 } from 'rn-library-test-aug17';
import { Calls } from './modules/reporting/historical/Calls';

export function App () {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    runMultiply();
  }, []);

  const runMultiply = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    LibraryTest.multiply(3, 7).then(setResult);
  };

  const runDivide = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    LibraryTest.divide(3, 7).then(setResult);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text>Result: {result}</Text>
          <Button2 onPress={runDivide} title="Divide this shit!" />

          <Button2 onPress={runMultiply} title="Multiply this shit!" color="#967d12" />
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
