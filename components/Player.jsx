import { StyleSheet, Image, Text, View, Pressable } from 'react-native';
import Header from './Header';
import AntDesign from '@expo/vector-icons/AntDesign';

const Player = ({
  albumCoverUrl,
  songTitle,
  artistName,
  isPaused,
  onPlayPressed,
  onNextPressed,
}) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.coverView}>
        <Image style={styles.coverImage} source={albumCoverUrl}/>
      </View>
      <Text style={styles.titleLabel}>{songTitle}</Text>
      <Text style={styles.artistLabel}>{artistName}</Text>
      <View style={styles.buttons}>
        <View style={styles.view}>

        </View>
        <View style={styles.play}>
          <View style={styles.circleButtonContainer}>
            <Pressable style={styles.circleButton} onPress={onPlayPressed}>
              <AntDesign name={isPaused ? 'caretright' : 'pause'} size={38} color='#25292e' />
            </Pressable>
          </View>
        </View>
        <View style={styles.next}>
          <View style={styles.circleButtonContainer}>
            <Pressable style={styles.circleButton} onPress={onNextPressed}>
              <AntDesign name='stepforward' size={38} color='#25292e' />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  coverView: {
    width: '100%',
    flex: 1,
    padding: '30px',
  },
  coverImage: {
    width: '100%',
    height: '100%',
    backgroundColor: 'green',
  },
  titleLabel: {
    fontSize: '25px',
  },
  artistLabel: {
    fontSize: '20px',
    color: 'lightgray',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '20px',
    marginBottom: '30px',
    width: '100%',

  },
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
    backgroundColor: '#fff',
  },
  view: {
    width: '33%',
  },
  play: {
    width: '33%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  next: {
    width: '33%',
  },
});

export default Player;