import { updateSelectedSoundscape } from '../../shared';

export default function funcRemoveSeedSong({
  state,
  setState,
  useCallback,
}) {
  const selectedSoundscapeIndex = state.selectedSoundscapeIndex;
  const soundscapes = state.soundscapes;
  const selectedSoundscape = soundscapes[selectedSoundscapeIndex];
  const user = state.user;

  return useCallback((song) => {
    const newSeedSongs = [...selectedSoundscape.seedSongs];
    const songToDeleteIndex = newSeedSongs.findIndex(({ id }) => id === song.id);
    newSeedSongs.splice(songToDeleteIndex, 1);

    const newSoundscape = {
      ...selectedSoundscape,
      seedSongs: newSeedSongs,
    };

    updateSelectedSoundscape(
      soundscapes,
      selectedSoundscapeIndex,
      newSoundscape,
      setState,
    );
  }, [soundscapes, selectedSoundscapeIndex, setState, user]);
}
