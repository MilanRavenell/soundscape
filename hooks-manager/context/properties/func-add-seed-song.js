import { updateSelectedSoundscape } from '../../shared';
import { createSeedTrack } from '../../../graphql-api';


export default function funcAddSeedSong({
  state,
  setState,
  useCallback,
}) {
  const selectedSoundscapeIndex = state.selectedSoundscapeIndex;
  const soundscapes = state.soundscapes;
  const selectedSoundscape = soundscapes[selectedSoundscapeIndex];
  const user = state.user;

  return useCallback(async (track) => {
    const newSoundscape = {
      ...selectedSoundscape,
      seedTracks: [
        ...selectedSoundscape.seedTracks,
        {
          ...track,
          addedBy: user.name
        }
      ],
    };

    await createSeedTrack({
      key: `${track.id}_${user.id}_${selectedSoundscape.id}`,
      spotifyId: track.id,
      userId: user.id,
      soundscapeId: selectedSoundscape.id,
    });

    updateSelectedSoundscape(
      soundscapes,
      selectedSoundscapeIndex,
      newSoundscape,
      setState,
    );
  }, [soundscapes, selectedSoundscape, user]);
}
