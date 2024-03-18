import {Component} from "react";
import {StyleSheet, Text, View, Image, SafeAreaView, Button, Linking, ScrollView} from "react-native";
import ajaxTools from "../ajax.tsx";

interface MovieDetailProps {
  movie: any;
  onBack: () => void;
}

interface MovieDetailState {
  movie: any;
}

class MovieDetail extends Component<MovieDetailProps, MovieDetailState> {
  constructor(props: MovieDetailProps) {
    super(props);
    this.state = {
      movie: this.props.movie,
    };
  }

  async componentDidMount() {
    const movie = await ajaxTools.fetchMovieDetails(this.props.movie.id);
    this.setState({
      movie: movie,
    });
  }

  getImage = () => {
    return this.state.movie.image
      ? { uri: this.state.movie.image }
      : null;
  }

  backToList = () => {
    this.props.onBack();
  };

  openMovie = () => {
    Linking.openURL(this.state.movie.url);
  };

  render() {
    const {movie} = this.state;
    const image = this.getImage();
    return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
        {image && <Image source={image} style={styles.poster} /> }
        <Text>
          {movie.title}
          {' '}
          ({movie.releaseYear})
        </Text>
        <View style={styles.buttonContainer}>
          <Button title={"Open Movie"} onPress={this.openMovie}></Button>
          <Button title={"Back"} onPress={this.backToList}></Button>
        </View>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
  },
  poster: {
    width: 200,
    height: 300,
    borderWidth: 1,
  },
});

export default MovieDetail;
