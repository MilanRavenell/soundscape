import { genTracks } from "../../shared";
import { play, updateSelectedSoundscape } from '../../shared';

// If there are less than 10 songs in the queue, generate more songs
// until there are 30
export default function refillQueueSongs({
  context,
  state,
  useEffect,
  setState
}) {
  const selectedSoundscapeIndex = state.selectedSoundscapeIndex;
  const soundscapes = state.soundscapes;
  const selectedSoundscape = context.selectedSoundscape;
  const spotifyAccessToken = state.spotifyAccessToken;

  const queueTracks = selectedSoundscape?.queueTracks;
  useEffect(() => {
    (async () => {
      if (queueTracks && queueTracks.length < 10) {
        const newTracks = [
          ...queueTracks,
          ...(await genTracks(selectedSoundscape, spotifyAccessToken, 30 - queueTracks.length)),
        ];

        console.log('lol: ', newTracks)

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
          setState);
      }
    })();
  }, [queueTracks]);
}
