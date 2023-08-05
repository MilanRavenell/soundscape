import { updateSelectedSoundscape } from '../../shared';
import { deleteSeedTrack } from '../../../graphql-api';

export default function funcRemoveSeedSong({
  state,
  setState,
  useCallback,
}) {
  const selectedSoundscapeIndex = state.selectedSoundscapeIndex;
  const soundscapes = state.soundscapes;
  const selectedSoundscape = soundscapes
    ? soundscapes[selectedSoundscapeIndex]
    : null;
  const user = state.user;

  return useCallback(async (track) => {
    console.log('deleting seed song')
    if (
      selectedSoundscapeIndex == null ||
      soundscapes == null ||
      selectedSoundscape == null
    ) {
      return;
    }

    const newSeedSongs = [...selectedSoundscape.seedTracks];
    const songToDeleteIndex = newSeedSongs.findIndex(({ id }) => id === track.id);
    newSeedSongs.splice(songToDeleteIndex, 1);

    const newSoundscape = {
      ...selectedSoundscape,
      seedTracks: newSeedSongs,
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
