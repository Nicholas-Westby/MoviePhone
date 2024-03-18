import React, {Component, ReactNode} from "react";
import {SafeAreaView, Text, StyleSheet} from "react-native";
import ajaxTools from '../ajax';
import MovieList from "./MovieList.tsx";
import MovieDetail from "./MovieDetail.tsx";

interface AppProps {

}

interface AppState {
  movies: [];
  currentMovieId?: number,
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  setCurrentMovie = (movieId: number) => {
    this.setState({
      currentMovieId: movieId,
    });
  };

  unsetCurrentMovie = () => {
    this.setState({
      currentMovieId: undefined,
    });
  };

  async componentDidMount() {
    const movies = await ajaxTools.fetchInitialMovies();
    this.setState({
        movies,
      });
  }

  render(): ReactNode {
    if (this.state.currentMovieId) {
      return <MovieDetail onBack={this.unsetCurrentMovie} movie={this.currentMovie()} />;
    }
    if (this.state.movies.length > 0) {
      return (
        <SafeAreaView style={styles.container}>
          <MovieList movies={this.state.movies} onItemPress={this.setCurrentMovie} />
        </SafeAreaView>
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>No movies!</Text>
      </SafeAreaView>
    );
  }

  currentMovie = () => {
    return this.state.movies.find(x => x.id === this.state.currentMovieId);
  };
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
