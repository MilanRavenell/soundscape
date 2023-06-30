import { updateSelectedSoundscape } from '../../shared';
import { deleteSeedTrack } from '../../../graphql-api';

export default function funcRemoveSeedSong({
  state,
  setState,
  useCallback,
}) {
  const selectedSoundscapeIndex = state.selectedSoundscapeIndex;
  const soundscapes = state.soundscapes;
  const selectedSoundscape = soundscapes[selectedSoundscapeIndex];
  const user = state.user;

  return useCallback(async (track) => {
    const newSeedSongs = [...selectedSoundscape.seedTrackss];
    const songToDeleteIndex = newSeedSongs.findIndex(({ id }) => id === track.id);
    newSeedSongs.splice(songToDeleteIndex, 1);

    const newSoundscape = {
      ...selectedSoundscape,
      seedTrackss: newSeedSongs,
    };

    await deleteSeedTrack({
      key: `${track.id}_${user.id}_${selectedSoundscape.id}`,
    });

    updateSelectedSoundscape(
      soundscapes,
      selectedSoundscapeIndex,
      newSoundscape,
      setState,
    );
  }, [soundscapes, selectedSoundscapeIndex, setState, user]);
}
