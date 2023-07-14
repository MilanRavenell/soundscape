import { deleteSoundscape, deleteSoundscapeMember } from '../../../graphql-api';

export default function funcDeleteSoundscape({
  state,
  setState,
  useCallback,
}) {
  const selectedSoundscapeIndex = state.selectedSoundscapeIndex;
  const soundscapes = state.soundscapes;
  const selectedSoundscape = soundscapes ? soundscapes[selectedSoundscapeIndex] : null;
  const user = state.user;

  return useCallback(async () => {
    await deleteSoundscape({
        id: selectedSoundscape.id,
    });

    await deleteSoundscapeMember({
        userId: user.id,
        soundscapeId: selectedSoundscape.id,
    });

    const newSoundscapes = [...soundscapes];
    newSoundscapes.splice(selectedSoundscapeIndex, 1);

    setState('selectedSoundscapeIndex', null);
    setState('soundscapes', newSoundscapes);
    setState('optionsModalOpen', false);
  }, [soundscapes, selectedSoundscapeIndex, user, setState]);
}
