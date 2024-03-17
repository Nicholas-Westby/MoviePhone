import {Component} from "react";
import {StyleSheet, Text, View, Image} from "react-native";
import posterImage from '../../assets/poster/poster.webp';

interface MovieItemProps {
  movie: any;
}

interface MovieItemState {

}

class MovieItem extends Component<MovieItemProps, MovieItemState> {
  render() {
    const {movie} = this.props;
    return (
      <View style={styles.container}>
        <Image source={posterImage} style={styles.poster} />
        <Text>
          {movie.title + ' '}
          ({movie.releaseYear})
        </Text>
      </View>
    );
  }
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
