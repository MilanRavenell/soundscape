
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { Header, Members, Player, SeedSongsList } from './index';
import { AntDesign } from '@expo/vector-icons'; 

const Soundscape = ({
    soundscape,
    index,
    onSoundscapePress,
}) => {
    return (
        <Pressable style={styles.soundscape} onPress={() => onSoundscapePress(index)}>
            <Text style={styles.name}>
                {soundscape.name}
            </Text>
            <Members members={soundscape.members} previewMode hideHeader/>
        </Pressable>
    );
}

const SoundscapeSelectionView = ({
    soundscapes,
    onSoundscapePress,
    onNewSoundscapePress,
}) => {
    return (
        <View style={styles.container}>
          <View style={styles.content}>
            <Header title={'Your Soundscapes'}/>
            <View style={styles.soundscapes}>
              {soundscapes.length > 0
                ? soundscapes.map((soundscape, index) => (
                    <Soundscape
                        soundscape={soundscape}
                        onSoundscapePress={onSoundscapePress}
                        key={index}
                        index={index}
                    />
                ))
                : (
                    <View style={styles.emptyMessage}>
                        <Text>You have no soundscapes</Text>
                    </View>
                )}
            </View>
            <View style={styles.newBtnContainer}>
                <Pressable style={styles.newBtn} onPress={onNewSoundscapePress}>
                    <AntDesign name="plus" size={24} color="black" />
                    <Text style={styles.newBtnText}>New Soundscape</Text>
                </Pressable>
            </View>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      width: '100%',
      maxWidth: '500px',
      padding: '10px',
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    soundscapes: {
        flex: 1,
        width: '100%',
        overflowY: 'auto',
    },
    emptyMessage: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    soundscape: {
        width: '100%',
        border: '1px solid black',
        borderRadius: '30px',
        padding: '10px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingTop: '40px',
        marginBottom: '20px',
    },
    soundscapeInfo: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    name: {
        textAlign: 'right',
        fontSize: '20px',
    },
    newBtnContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: '40px',
    },
    newBtn: {
        padding: '10px',
        backgroundColor: 'orange',
        borderRadius: '50px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    newBtnText: {
        fontSize: '16px',
        marginLeft: '5px',
    }
});

export default SoundscapeSelectionView;