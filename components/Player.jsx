import { useState, useEffect } from 'react';
import { StyleSheet, Image, Text, View, Pressable, Button } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 

const QueueView = ({
  songs,
  isActive,
  onSongPressed,
  onRegeneratePressed,
}) => {
  return (
    <View style={styles.queueContainer}>
      <View style={styles.btns}>
        <Pressable style={styles.regenerateBtn} onPress={onRegeneratePressed}>
          <Text>Regenerate</Text>
        </Pressable>
      </View>
      <View style={styles.songs}>
        {songs.map((song, index) => (
          <Pressable
            style={styles.song}
            onPress={() => onSongPressed(song)}
            key={index}
          >
            <Image style={styles.thumbnail} source={song.album.images[0].url} />
            <View style={styles.queueSongInfo}>
              <Text style={{
                ...styles.queueSongTitle,
                ...((index === 0 && isActive) ? { color: 'orange' } : {})
              }}>
                {song.name}
              </Text>
              <Text style={styles.queueSongArtist}>{song.artists[0].name}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  )
}

const CurSongView = ({
  curSong,
}) => {
  return (
    <View style={styles.curSongContainer}>
      <View style={styles.coverView}>
        <Image style={styles.coverImage} source={curSong.album.images[0].url}/>
      </View>
      <Text style={styles.titleLabel}>{curSong.name}</Text>
      <Text style={styles.artistLabel}>{curSong.artists[0].name}</Text>
    </View>
  )
}

const Player = ({
  songs,
  isPaused,
  isActive,
  onPlayPressed,
  onNextPressed,
  onSongPressed,
  onRegeneratePressed,
}) => {
  const [view, setView] = useState('queue');

  const onViewPressed = () => {
    setView((view === 'cur_song') ? 'queue' : 'cur_song')
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {(view === 'cur_song')
          ? <CurSongView curSong={songs[0]} />
          : <QueueView
              songs={songs}
              isActive={isActive}
              onSongPressed={onSongPressed}
              onRegeneratePressed={onRegeneratePressed}
            />}
      </View>
      <View style={styles.buttons}>
        <View style={styles.view}>
          <Pressable onPress={onViewPressed}>
            {(view === 'cur_song')
              ? <AntDesign name="bars" size={38} color="black" />
              : <Entypo name="image" size={38} color="black" />}
          </Pressable>
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
  },
  main: {
    width: '100%',
    flex: 1,
  },
  curSongContainer: {
    width: '100%',
    height: '100%',
  },
  coverView: {
    width: '100%',
    flex: 1,
    marginBottom: '20px',
  },
  coverImage: {
    width: '100%',
    height: '100%',
    backgroundColor: 'green',
  },
  titleLabel: {
    fontSize: '25px',
    textAlign: 'left',
    width: '100%',
  },
  artistLabel: {
    fontSize: '20px',
    color: 'lightgray',
    textAlign: 'left',
    width: '100%',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '10px',
    marginBottom: '10px',
    width: '100%',

  },
  circleButtonContainer: {
    width: 84,
    height: 84,
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  queueContainer: {
    width: '100%',
    height: '100%',
    display: 'flex'
  },
  btns: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  regenerateBtn: {
    padding: '10px',
    backgroundColor: 'orange',
    borderRadius: '50px',
  },
  songs: {
    width: '100%',
    overflowY: 'auto',
    overflowX: 'hidden',
    flex: 1,
  },
  song: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginVertical: '5px',
    padding: '5px',
    border: '1px solid black',
    borderRadius: '50px',
    alignItems: 'center'
  },
  thumbnail: {
    width: '70px',
    height: '70px',
    overflow: 'hidden',
    objectFit: 'contain',
    marginRight: '20px',
    borderRadius: '50%',
  },
  queueSongTitle: {
    fontSize: '24px',
  }
});

export default Player;