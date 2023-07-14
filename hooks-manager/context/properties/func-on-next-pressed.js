import { play, updateSelectedSoundscape } from '../../shared';

export default function funcOnNextPressed({
  state,
  setState,
  useCallback,
}) {
  const selectedSoundscapeIndex = state.selectedSoundscapeIndex;
  const soundscapes = state.soundscapes;
  const selectedSoundscape = soundscapes ? soundscapes[selectedSoundscapeIndex] : null;
  const spotifyAccessToken = state.spotifyAccessToken;

  return useCallback(async () => {
    if (
      !selectedSoundscape ||
      !selectedSoundscape.queueTracks ||
      selectedSoundscape.queueTracks.length === 0
    ) {
      return;
    }

    const curTracks = selectedSoundscape.queueTracks;
    console.log('tracks: ', curTracks)
    curTracks.shift();

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
