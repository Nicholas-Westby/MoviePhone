import React, {Component, ReactNode} from "react";
import {SafeAreaView, Text, StyleSheet, Animated, View, Easing, Dimensions} from "react-native";
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
  titleOffset = new Animated.Value(0);
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
    this.animateTitle();
    setTimeout(async () => {
      const movies = await ajaxTools.fetchInitialMovies();
      this.setState({
        movies,
      });
    }, 5000);//TODO: Timeout for testing (remove later).
  }

  animateTitle = (dir: number = 1) => {
    const windowHeight = Dimensions.get('window').height;
    const offset = windowHeight / 80;
    Animated.timing(
        this.titleOffset,
        {
          useNativeDriver: false,
          toValue: offset * dir,
          duration: 400,
          easing: Easing.linear,
        })
      .start(({finished}) => {
        if (!finished) {
          return;
        }
        this.animateTitle(-1 * dir);
      });
  };

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
      <SafeAreaView style={styles.welcome}>
        <Animated.View style={{top: this.titleOffset}}>
          <Text style={styles.header}>Welcome to
            {' '}
            <View>
              <Text style={[styles.header, styles.emphasizedHeader]}>Movie Phone</Text>
            </View>
          !</Text>
        </Animated.View>
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
    textAlign: 'center',
  },
  emphasizedHeader: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  welcome: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;
