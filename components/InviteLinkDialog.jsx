import {
    Button,
    Dialog,
    DialogHeader,
    DialogContent,
    DialogActions,
    Text,
  } from "@react-native-material/core";

const InviteLinkDialog = ({
    visible,
    soundscape,
    user,
    onDismiss,
    onConfirm,
}) => {
    if (!soundscape || !user) {
        return;
    }

    const inviteLink = `https://soundscape3.vercel.app/invite?soundscapeId=${soundscape.id}&inviterId=${user.owner}`;

    return (
        <Dialog visible={visible} onDismiss={onDismiss}>
            <DialogHeader title="Invite Friends" />
            <DialogContent>
                <Text style={{ marginBottom: 10 }}>
                    Send the following link to anyone you want to join this Soundscape
                </Text>
                <Text>{inviteLink}</Text>
            </DialogContent>
            <DialogActions>
                <Button
                    title="Close"
                    compact
                    variant="text"
                    onPress={onDismiss}
                />
                <Button
                    title="Copy Link"
                    compact
                    variant="text"
                    onPress={() => onConfirm(inviteLink)}
                />
            </DialogActions>
        </Dialog>
    )
}

export default InviteLinkDialog;