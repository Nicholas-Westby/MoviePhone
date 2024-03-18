import {Component} from "react";
import {StyleSheet, Text, View, FlatList} from "react-native";
import MovieItem from "./MovieItem";

interface MovieListProps {
  movies: [];
  onItemPress: (movieId: number) => void;
}

interface MovieListState {

}

class MovieList extends Component<MovieListProps, MovieListState> {
  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.props.movies} renderItem={({item}) => <MovieItem onPress={this.props.onItemPress} movie={item} />} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  }
});

export default MovieList;
