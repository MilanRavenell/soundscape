import { useState } from 'react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogContent,
    DialogActions,
    Text,
    TextInput,
  } from "@react-native-material/core";

const EditSoundscapeNameDialog = ({
    visible,
    soundscape,
    onDismiss,
    onConfirm,
}) => {
    if (!soundscape) {
        return;
    }

    const [textfieldValue, setTextfieldValue] = useState(soundscape.name);

    return (
        <Dialog visible={visible} onDismiss={onDismiss}>
            <DialogHeader title="Edit Soundscape Name" />
            <DialogContent>
                <Text style={{ marginBottom: 10 }}>
                    Choose a new Soundscape name
                </Text>
                <TextInput
                    label="Name"
                    variant="standard"
                    value={textfieldValue}
                    onChangeText={(newValue) => setTextfieldValue(newValue)}
                />
            </DialogContent>
            <DialogActions>
                <Button
                    title="Close"
                    compact
                    variant="text"
                    onPress={onDismiss}
                />
                <Button
                    title="Confirm"
                    compact
                    variant="text"
                    onPress={() => onConfirm(textfieldValue)}
                />
            </DialogActions>
        </Dialog>
    )
}

export default EditSoundscapeNameDialog;