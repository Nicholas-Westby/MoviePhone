import React, {Component, ReactNode} from "react";
import {SafeAreaView, Text, StyleSheet} from "react-native";
import ajaxTools from '../ajax';
import MovieList from "./MovieList.tsx";

interface AppProps {

}

interface AppState {
  movies: [];
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  async componentDidMount() {
    const movies = await ajaxTools.fetchInitialMovies();
    console.log({movies});//TODO: Remove.
    this.setState({
        movies,
      });
  }

  render(): ReactNode {
    return (
      <SafeAreaView style={styles.container}>
        {
          this.state.movies.length > 0 ? (
            <MovieList movies={this.state.movies} />
          ) : (
            <Text style={styles.header}>No movies!</Text>
          )
        }
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 1,
  },
});

export default App;
