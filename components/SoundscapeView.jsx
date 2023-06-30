
import { StyleSheet, View, Pressable } from 'react-native';
import { Header, Members, Player, SeedSongsList } from './index'; 

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
}) => {
    return (
        <View style={styles.container}>
          <Header title={soundscape.name} onBackPressed={onBackPressed} onOptionsPress={onOptionsPress}/>
          <Pressable style={styles.members} onPress={onMembersPressed}>
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
            />
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
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
    },
    main: {
      width: '100%',
      flex: 1,
      display: 'flex',
    }
});

export default SoundscapeView;