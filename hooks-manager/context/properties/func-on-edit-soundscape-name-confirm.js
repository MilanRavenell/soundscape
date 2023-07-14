import { modifySoundscape } from '../../../graphql-api';

export default function funcOnEditSoundscapeNameConfirm({
  state,
  setState,
  useCallback,
}) {
  const selectedSoundscapeIndex = state.selectedSoundscapeIndex;
  const soundscapes = state.soundscapes;
  const selectedSoundscape = soundscapes ? soundscapes[selectedSoundscapeIndex] : null;
  const user = state.user;

  return useCallback(async (newName) => {
    await modifySoundscape({
        id: selectedSoundscape.id,
        name: newName,
    });

    const newSoundscapes = [...soundscapes];
    newSoundscapes[selectedSoundscapeIndex].name = newName;

    console.log('poooo', newSoundscapes)

    setState('soundscapes', newSoundscapes);
    setState('editSoundscapeNameDialogOpen', false)
  }, [soundscapes, selectedSoundscapeIndex, user, setState]);
}
