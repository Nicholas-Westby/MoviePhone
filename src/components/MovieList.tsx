import {Component} from "react";
import {StyleSheet, Text, View} from "react-native";

interface MovieListProps {

}

interface MovieListState {

}

class MovieList extends Component<MovieListProps, MovieListState> {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Movies!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  }
});

export default MovieList;
