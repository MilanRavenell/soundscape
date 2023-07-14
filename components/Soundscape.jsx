import { StyleSheet, View, Pressable, Text, Image, FlatList } from 'react-native';
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
        borderRadius: '30px',
        marginHorizontal: '1%',
        marginBottom: '20px',
    },
    soundscapeInner: {
        width: '100%',
        borderRadius: '30px',
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
    },
    backgroundTrackImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
});

export default Soundscape;