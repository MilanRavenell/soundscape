
import { StyleSheet, View, Pressable, Text, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { Modal } from './index';

const Member = ({
    member,
}) => {
    return (
        <View style={styles.member}>
            <Image
                style={styles.thumbnail}
                source={member.profPicUrl}
            />
            <View style={styles.memberInfo}>
                <Text style={styles.name}>
                    {member.displayName}
                </Text>
            </View>
        </View>
    );
}

const MembersModal = ({
    closeModal,
    members,
    onInvitePressed,
}) => {
    return (
        <Modal
            title={'Members'}
            closeModal={closeModal}
            btnText={'Invite'}
            onBtnPressed={onInvitePressed}
        >
            <View style={styles.container}>
                <View style={styles.main}>
                    <View style={styles.members}>
                        {members.map((member, index) => (
                            <Member member={member} key={index} />
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
    name: {
        fontSize: '24px',
        color: 'white',
    },
    members: {
        overflowY: 'auto',
        flex: 1,
    },
    member: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '10px',
        alignItems: 'center',
    },
    thumbnail: {
        height: '70px',
        width: '70px',
        objectFit: 'contain',
        marginRight: '10px',
        borderRadius: '50%',
    },
});

export default MembersModal;