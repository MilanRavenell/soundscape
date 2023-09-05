
import { StyleSheet, View, Pressable, Text, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Modal } from './index';

const Song = ({
    song,
    addedByCurUser,
    onRemovePressed,
}) => {
    return (
        <View style={styles.song}>
            <View style={styles.thumbnail}>
                <Image
                    style={styles.thumbnailImg}
                    source={song.album.images[0].url}
                />
                <Image
                    style={styles.thumbnailAttribution}
                    source={require('../assets/spotify_logo.png')}
                />
            </View>
            
            <View style={styles.songInfo}>
                <Text style={styles.title}>
                    {song.name}
                </Text>
                <Text style={styles.addedBy}>
                    {`Added by ${song.addedBy}`}
                </Text>
            </View>
            {addedByCurUser && (
                <View style={styles.removeContainer}>
                    <Pressable style={styles.remove} onPress={() => onRemovePressed(song)}>
                        <MaterialIcons name="delete" size={24} color="white" />
                    </Pressable>
                </View>
            )}
        </View>
    );
}

const SeedSongsModal = ({
    closeModal,
    seedSongs,
    user,
    onAddSongsPressed,
    onRemoveSongPressed,
}) => {
    return (
        <Modal
            title={'Seed Songs'}
            closeModal={closeModal}
            btnText={'Add Song'}
            onBtnPressed={onAddSongsPressed}
        >
            <View style={styles.container}>
                <View style={styles.main}>
                    <View style={styles.songs}>
                        {seedSongs.map((song, index) => (
                            <Song
                                song={song}
                                key={index}
                                addedByCurUser={song.addedBy === user.name}
                                onRemovePressed={onRemoveSongPressed}
                            />
                        ))}
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column'
    },
    main: {
        display: 'flex',
        height: '100%',
    },
    title: {
        fontSize: '24px',
        color: 'white',
    },
    songs: {
        overflowY: 'auto',
        overflowX: 'hidden',
        flex: 1,
    },
    song: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '10px',
        alignItems: 'center',
    },
    thumbnail: {
        height: '70px',
        width: '70px',
        marginRight: '10px',
    },
    thumbnailImg: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    thumbnailAttribution: {
        position: 'absolute',
        bottom: 5,
        right: 5,
        height: 16,
        width: 16,
        resizeMode: 'contain',
    },
    songInfo: {
        flex: 1,
        overflow: 'hidden',
    },
    removeContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }
});

export default SeedSongsModal;