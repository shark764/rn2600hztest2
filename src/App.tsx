import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { Calls } from './modules/reporting/historical/Calls';

export function App () {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          {/* <Text>Open up App.tsx to start working on your app!</Text> */}
          <Calls id="1234" phone="+503" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
