
import { StyleSheet, View, Pressable, Text, Image, FlatList } from 'react-native';
import { ActivityIndicator } from "@react-native-material/core";
import { Header, Members, Player, SeedSongsList } from './index';
import { AntDesign } from '@expo/vector-icons';

const Soundscape = ({
    soundscape,
    index,
    onSoundscapePress,
}) => {
    return (
        <Pressable style={styles.soundscape} onPress={() => onSoundscapePress(index)}>
            <View style={styles.soundscapeInner}>
                <View style={styles.background}>
                    {soundscape.coverTrackUrls.map((url, index) => (
                        <View style={styles.backgroundTrack} key={index}>
                            <Image
                                style={styles.backgroundTrackImage}
                                source={url}
                            />
                            <Image
                                style={styles.attribution}
                                source={require('../assets/spotify_logo.png')}
                            />
                        </View>
                    ))}
                </View>
                <View style={styles.info}>
                    <Text style={styles.name}>
                        {soundscape.name}
                    </Text>
                    <View style={styles.members}>
                        <Members members={soundscape.members} previewMode hideHeader/>
                    </View>
                </View>
            </View>
        </Pressable>
    );
}

const SoundscapeSelectionView = ({
    soundscapes,
    newSoundscapeLoading,
    onSoundscapePress,
    onNewSoundscapePress,
    onOptionsPress,
}) => {
    return (
        <View style={styles.container}>
          <View style={styles.content}>
            <Header
                title={'Your Soundscapes'}
                onOptionsPress={onOptionsPress}
            />
            <View style={styles.soundscapes}>
                {!soundscapes && (
                    <View style={styles.loading}>
                        <ActivityIndicator size='large' color='white'/>
                    </View>
                )}
                {(soundscapes && soundscapes.length === 0) && (
                    <View style={styles.emptyMessage}>
                        <Text>You have no soundscapes</Text>
                    </View>
                )}
                {(soundscapes && soundscapes.length > 0)
                    && soundscapes.map((soundscape, index) => (
                        <Soundscape
                            soundscape={soundscape}
                            onSoundscapePress={onSoundscapePress}
                            key={index}
                            index={index}
                        />
                ))}
            </View>
            <View style={styles.newBtnContainer}>
                <Pressable style={styles.newBtn} onPress={onNewSoundscapePress}>
                    {newSoundscapeLoading
                        ? (
                            <ActivityIndicator color='white'/>
                        ) : (
                            <AntDesign name="plus" size={24} color="white" />
                        )}
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
    loading: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyMessage: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    soundscape: {
        width: '98%',
        backgroundColor: 'white',
        filter: 'drop-shadow(0px 0px 4px gray)',
        // borderRadius: '30px',
        marginHorizontal: '1%',
        marginBottom: '20px',
    },
    soundscapeInner: {
        width: '100%',
        // borderRadius: '30px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        overflow: 'hidden',
    },
    soundscapeInfo: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    info: {
        width: '100%',
        display: 'flex',
        padding: 5
    },
    name: {
        textAlign: 'right',
        fontSize: '20px',
    },
    members: {
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end'
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
        backgroundColor: 'black',
        borderRadius: '50px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        filter: 'drop-shadow(4px 4px 4px gray)',
    },
    newBtnText: {
        fontSize: '16px',
        marginLeft: '5px',
        color: 'white',
    },
    background: {
        width: '100%',
        // flex: 1,
        display: 'flex',
        flexDirection: 'row',
        top: 0,
        left: 0,
        height: 130,
    },
    backgroundTrack: {
        flex: 1,
        height: '100%',
        position: 'relative',
    },
    backgroundTrackImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    attribution: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        height: 16,
        width: 16,
        resizeMode: 'contain'
    }
});

export default SoundscapeSelectionView;