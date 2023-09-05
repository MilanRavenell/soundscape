
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

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

const HomeOptionsModal = ({
    closeModal,
    onDeleteAccountPressed,
    onPrivacyPolicyPressed,
}) => {
    return (
        <Modal title={'Options'} closeModal={closeModal}>
            <View style={styles.container}>
                <View style={styles.main}>
                    <Option
                        title={'Disconnect Spotify Account'}
                        icon={<AntDesign name="deleteuser" size={36} color="white" />}
                        onPress={onDeleteAccountPressed}
                    />
                    <Option
                        title={'Privacy Policy'}
                        icon={<AntDesign name="infocirlceo" size={36} color="white" />}
                        onPress={onPrivacyPolicyPressed}
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

export default HomeOptionsModal;