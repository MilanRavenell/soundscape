import { play, pause } from '../../shared';

export default function funcOnPlayPressed({
  state,
  setState,
  useCallback,
}) {
  const selectedSoundscapeIndex = state.selectedSoundscapeIndex;
  const soundscapes = state.soundscapes;
  const selectedSoundscape = soundscapes[selectedSoundscapeIndex];
  const isPaused = state.isPaused;
  const curPlayingTrack = state.curPlayingTrack;
  const spotifyAccessToken = state.spotifyAccessToken;

  return useCallback(async () => {
    console.log('play pressed')
    if (
      !selectedSoundscape ||
      !selectedSoundscape.queueTracks ||
      selectedSoundscape.queueTracks.length === 0
    ) {
      return;
    }

    if (!curPlayingTrack) {
      const curTracks = [...selectedSoundscape.queueTracks];
      play(curTracks, null, spotifyAccessToken, setState);
      return;
    }

    isPaused
      ? play(
        null,
        null,
        spotifyAccessToken,
        setState,
      )
      : pause(
        spotifyAccessToken,
      );
    setState('isPaused', !isPaused)
  }, [selectedSoundscape, curPlayingTrack, isPaused, spotifyAccessToken]);
}
