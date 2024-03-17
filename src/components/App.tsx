import React, {Component, ReactNode} from "react";
import {SafeAreaView, Text, StyleSheet} from "react-native";

interface AppProps {

}

interface AppState {

}

class App extends Component<AppProps, AppState> {
  render(): ReactNode {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Hi</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
  },
});

export default App;
