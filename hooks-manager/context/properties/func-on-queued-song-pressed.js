import { updateSelectedSoundscape } from '../../shared';
import { play } from '../../shared';

export default function funcOnQueuedSongPressed({
  state,
  setState,
  useCallback,
}) {
  const selectedSoundscapeIndex = state.selectedSoundscapeIndex;
  const soundscapes = state.soundscapes;
  const selectedSoundscape = soundscapes ? soundscapes[selectedSoundscapeIndex] : null;
  const spotifyAccessToken = state.spotifyAccessToken;

  return useCallback(async (song) => {
    const songIndex = selectedSoundscape.queueTracks.findIndex(({ id }) => id === song.id);

    const curTracks = selectedSoundscape.queueTracks.slice(songIndex);

    await play(curTracks, null, spotifyAccessToken, setState);
    updateSelectedSoundscape(
      soundscapes,
      selectedSoundscapeIndex,
      {
        queueTracks: curTracks,
      },
      setState,
    );
  }, [soundscapes, selectedSoundscapeIndex, spotifyAccessToken, setState]);
}
