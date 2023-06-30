import { genTracks, play, updateSelectedSoundscape } from '../../shared';

export default function funcRegenerateSongs({
  state,
  setState,
  useCallback,
}) {
  const selectedSoundscapeIndex = state.selectedSoundscapeIndex;
  const soundscapes = state.soundscapes;
  const selectedSoundscape = soundscapes[selectedSoundscapeIndex];
  const spotifyAccessToken = state.spotifyAccessToken;

  return useCallback(async () => {
    const newTracks = await genTracks(selectedSoundscape, spotifyAccessToken);

    setState('curPlayingTrack', newTracks[0]);
    setState('isPaused', false);
    await play(
      newTracks,
      null,
      spotifyAccessToken,
      setState,
    );
    updateSelectedSoundscape(
      soundscapes,
      selectedSoundscapeIndex,
      {
        queueTracks: newTracks,
      },
      setState,
    );
  }, [soundscapes, selectedSoundscapeIndex, spotifyAccessToken, setState]);
}
