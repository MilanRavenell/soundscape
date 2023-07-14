
import { StyleSheet, View } from 'react-native';
import { Header, Members, Player, SeedSongsList } from './index'; 
import { Pressable } from '@react-native-material/core';

const SoundscapeView = ({
    soundscape,
    playerIsPaused,
    isActive,
    onPlayPressed,
    onNextPressed,
    onOptionsPress,
    onMembersPressed,
    onBackPressed,
    onSongPressed,
    onRegeneratePressed,
    onSeedSongsPressed,
}) => {
    return (
        <View style={styles.container}>
          <Header
            title={soundscape.name}
            onBackPressed={onBackPressed}
            onOptionsPress={onOptionsPress}
          />
          <Pressable
            style={styles.members}
            onPress={onMembersPressed}
            pressEffect='ripple'
          >
            <Members members={soundscape.members}/>
          </Pressable>
          <View style={styles.main}>
            <Player
              songs={soundscape.queueTracks}
              isPaused={playerIsPaused}
              isActive={isActive}
              onPlayPressed={onPlayPressed}
              onNextPressed={onNextPressed}
              onSongPressed={onSongPressed}
              onRegeneratePressed={onRegeneratePressed}
              onSeedSongsPressed={onSeedSongsPressed}
            />
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      maxWidth: '500px',
      display: 'flex',
      flexDirection: 'column',
      padding: '10px',
    },
    members: {
      width: '100%',
      marginBottom: '10px',
      padding: 10,
      borderRadius: 15,
      backgroundColor: 'white',
      filter: 'drop-shadow(0px 0px 4px gray)',
    },
    main: {
      width: '100%',
      flex: 1,
      display: 'flex',
    }
});

export default SoundscapeView;