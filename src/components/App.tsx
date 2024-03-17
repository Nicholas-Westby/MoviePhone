import React, {Component, ReactNode} from "react";
import {SafeAreaView, Text} from "react-native";

interface AppProps {

}

interface AppState {

}

class App extends Component<AppProps, AppState> {
  render(): ReactNode {
    return (
      <SafeAreaView>
        <Text>Hi</Text>
      </SafeAreaView>
    );
  }
}

export default App;
