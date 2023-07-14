import { StyleSheet, Image, View, Text, Pressable } from 'react-native';
import {
    ActivityIndicator,
    Button,
} from "@react-native-material/core";
import { Soundscape } from './index';

const InviteView = ({
    inviteSoundscape,
    inviteUser,
    inviteError,
    inviteSuccess,
    onAcceptPressed,
}) => {
    if (inviteError) {
        return (
            <View style={styles.container}>
                <Text>Error</Text>
            </View>
        )
    }

    if (inviteSuccess) {
        return (
            <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Successfully joined Soundscape</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.bodyText}>{`You have successfully joined ${inviteSoundscape.name}`}</Text>
            </View>
        </View>
        )
    }

    if (!inviteSoundscape || !inviteUser) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Soundscape Invite</Text>
            </View>
            <View style={styles.soundscape}>
                <Soundscape soundscape={inviteSoundscape} onSoundscapePress={() => {}}/>
            </View>
            <View style={styles.body}>
                <Text style={styles.bodyText}>{`You have been invited to ${inviteSoundscape.name} by ${inviteUser.displayName}`}</Text>
            </View>
            <View style={styles.accept}>
                <Button title='Accept' onPress={onAcceptPressed}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    maxWidth: 400,
    maxHeight: 500,
    borderRadius: 15,
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
  },
  soundscape: {
    width: '90%',
  },
  body: {
    marginBottom: 50,
  },
  bodyText: {
    textAlign: 'center',
  },
  accept: {

  }
});

export default InviteView;