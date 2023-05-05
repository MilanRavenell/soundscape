import { StyleSheet, Image, Text, View, Pressable } from 'react-native';

const SeedSongsList = ({
  seedSongs
}) => {
  return (
    <View>
      {seedSongs.map((song) => {
        <View>
          <Text>{song.name}</Text>
          <Text>{song.artists[0].name}</Text>
        </View>
      })}
    </View>
  )
};

export default SeedSongsList;