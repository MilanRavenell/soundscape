import { updateSelectedSoundscape } from '../../shared';
import { play } from '../../shared';

export default function funcOnQueuedSongPressed({
  state,
  setState,
  useCallback,
}) {
  const selectedSoundscapeIndex = state.selectedSoundscapeIndex;
  const soundscapes = state.soundscapes;
  const selectedSoundscape = soundscapes[selectedSoundscapeIndex];
  const spotifyAccessToken = state.spotifyAccessToken;

  return useCallback(async (song) => {
    const songIndex = selectedSoundscape.queueSongs.findIndex(({ id }) => id === song.id);

    const curTracks = selectedSoundscape.queueSongs.slice(songIndex);

    await play(curTracks, null, spotifyAccessToken, setState);
    updateSelectedSoundscape(
      soundscapes,
      selectedSoundscapeIndex,
      {
        queueSongs: curTracks,
      },
      setState,
    );
  }, [soundscapes, selectedSoundscapeIndex, spotifyAccessToken, setState]);
}
