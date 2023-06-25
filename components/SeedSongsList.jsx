import { StyleSheet, Image, Text, View, Pressable } from 'react-native';

const SeedSongsList = ({
  seedSongs
}) => {
  console.log(seedSongs)
  return (
    <View style={styles.container}>
      {seedSongs.map((song) => (
        <View style={styles.song}>
          <Text>{song.name}</Text>
          <Text>{song.artists[0].name}</Text>
        </View>
      ))}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  song: {
    width: '100%',
    border: '1px solid black'
  }
});

export default SeedSongsList;