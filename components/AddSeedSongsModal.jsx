
import { StyleSheet, View, Pressable, Text, Image } from 'react-native';
import { TextInput } from "@react-native-material/core";
import { Modal } from './index';

const Song = ({
    song,
    isSeedSong,
    onPress,
}) => {
    return (
        <Pressable
            style={styles.song}
            onPress={!isSeedSong ? (() => onPress(song)) : () => {}}
        >
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
                <Text style={{
                    ...styles.title,
                    ...(isSeedSong ? { color: 'orange'} : {})
                }}>
                    {song.name}
                </Text>
                <Text style={styles.artist}>
                    {song.artists[0].name}
                </Text>
            </View>
            <View style={styles.remove}>

            </View>
        </Pressable>
    );
}

const AddSeedSongsModal = ({
    closeModal,
    query,
    searchSongs,
    seedSongs,
    onSongPressed,
    onDonePressed,
    onTextFieldChange,
}) => {
    const seedSongIds = seedSongs.map(({ id }) => id);

    return (
        <Modal
            title={'Add Songs'}
            closeModal={closeModal}
            btnText={'Done'}
            onBtnPressed={onDonePressed}
        >
            <View style={styles.container}>
                <View style={styles.main}>
                    <View style={styles.textfieldContainer}>
                        <TextInput
                            style={styles.textField}
                            label="Search"
                            variant="outlined"
                            onChangeText={onTextFieldChange}
                            value={query}
                        />
                    </View>
                    <View style={styles.songs}>
                        {searchSongs.map((song, index) => (
                            <Song
                                song={song}
                                onPress={onSongPressed}
                                isSeedSong={seedSongIds.includes(song.id)}
                                key={index}
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
    textfieldContainer: {
        marginBottom: '20px',
    },
    textField: {
        // border: '1px solid white',
        // borderRadius: '50px',
        // padding: '10px',
        color: 'white',
    }
});

export default AddSeedSongsModal;