
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons, Entypo } from '@expo/vector-icons';

import { Modal } from './index';

const Option = ({
    title,
    icon,
    onPress,
}) => {
    return (
        <Pressable style={styles.optionContainer} onPress={onPress}>
            <View style={styles.optionIcon}>
                {icon}
            </View>
            <Text style={styles.title}>
                {title}
            </Text>
        </Pressable>
    );
}

const OptionsModal = ({
    closeModal,
    onSeedSongsPressed,
    onLeaveSoundscapePressed,
}) => {
    return (
        <Modal title={'Options'} closeModal={closeModal}>
            <View style={styles.container}>
                <View style={styles.main}>
                    <Option
                        title={'Seed Songs'}
                        icon={<MaterialCommunityIcons name="seed" size={36} color="white" />}
                        onPress={onSeedSongsPressed}
                    />
                    <Option
                        title={'Edit Soundscape Name'}
                        icon={<Entypo name="edit" size={36} color="white" />}
                        onPress={()=>{}}
                    />
                    <Option
                        title={'Leave Soundscape'}
                        icon={<Ionicons name="exit" size={36} color="white" />}
                        onPress={onLeaveSoundscapePressed}
                    />
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
        marginTop: '40px',
    },
    optionContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '10px',
      alignItems: 'center',
    },
    optionIcon: {
        marginRight: '10px',
    },
    title: {
        fontSize: '24px',
        color: 'white',
    }
});

export default OptionsModal;