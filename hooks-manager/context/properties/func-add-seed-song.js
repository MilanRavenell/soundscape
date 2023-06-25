import { updateSelectedSoundscape } from '../../shared';


export default function funcAddSeedSong({
  state,
  setState,
  useCallback,
}) {
  const selectedSoundscapeIndex = state.selectedSoundscapeIndex;
  const soundscapes = state.soundscapes;
  const selectedSoundscape = soundscapes[selectedSoundscapeIndex];
  const user = state.user;

  return useCallback((song) => {
    const newSoundscape = {
      ...selectedSoundscape,
      seedSongs: [
        ...selectedSoundscape.seedSongs,
        {
          ...song,
          addedBy: user.name
        }
      ],
    };

    updateSelectedSoundscape(
      soundscapes,
      selectedSoundscapeIndex,
      newSoundscape,
      setState,
    );
  }, [soundscapes, selectedSoundscape, user]);
}
