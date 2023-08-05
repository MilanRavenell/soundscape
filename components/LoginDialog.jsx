import {
    Button,
    Dialog,
    DialogHeader,
    DialogContent,
    DialogActions,
    Text,
  } from "@react-native-material/core";

const LoginDialog = ({
    visible,
    onDismiss,
    onConfirm,
}) => {
    return (
        <Dialog visible={visible} onDismiss={onDismiss}>
            <DialogHeader title="Connect Spotify Account" />
            <DialogContent>
                <Text>
                    Please connect your Spotify account to continue
                </Text>
            </DialogContent>
            <DialogActions>
                <Button
                    title="Cancel"
                    compact
                    variant="text"
                    onPress={onDismiss}
                />
                <Button
                    title="Connect"
                    compact
                    variant="text"
                    onPress={onConfirm}
                />
            </DialogActions>
        </Dialog>
    )
}

export default LoginDialog;