import {Component} from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import posterImage from '../../assets/poster/poster.webp';

interface MovieItemProps {
  movie: any;
  onPress: (movieId: number) => void;
}

interface MovieItemState {

}

class MovieItem extends Component<MovieItemProps, MovieItemState> {
  render() {
    const {movie} = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={this.handleMovieClick}>
        <Image source={posterImage} style={styles.poster} />
        <Text>
          {movie.title}
          {' '}
          ({movie.releaseYear})
        </Text>
      </TouchableOpacity>
    );
  }

  handleMovieClick = () => {
    this.props.onPress(this.props.movie.id);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  poster: {
    width: 100,
    height: 150,
    borderWidth: 1,
  },
});

export default MovieItem;
