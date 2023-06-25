import { play, updateSelectedSoundscape } from '../../shared';

export default function funcOnNextPressed({
  state,
  setState,
  useCallback,
}) {
  const selectedSoundscapeIndex = state.selectedSoundscapeIndex;
  const soundscapes = state.soundscapes;
  const selectedSoundscape = soundscapes[selectedSoundscapeIndex];
  const spotifyAccessToken = state.spotifyAccessToken;

  return useCallback(async () => {
    if (
      !selectedSoundscape ||
      !selectedSoundscape.queueSongs ||
      selectedSoundscape.queueSongs.length === 0
    ) {
      return;
    }

    const curTracks = selectedSoundscape.queueSongs;
    console.log('tracks: ', curTracks)
    curTracks.shift();

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
