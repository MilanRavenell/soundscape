// If there are less than 10 songs in the queue, generate more songs
// until there are 30
export default function refillQueueSongs({
  context,
  state,
  useEffect,
}) {
  const selectedSoundscape = context.selectedSoundscape
  const playTracks = context.playTracks;
  const genTracks = context.genTracks;
  const updateSelectedSoundscape = context.updateSelectedSoundscape;

  const queueSongs = selectedSoundscape?.queueSongs;
  useEffect(() => {
    (async () => {
      if (queueSongs && queueSongs.length < 10) {
        const newTracks = [
          ...queueSongs,
          ...(await genTracks(selectedSoundscape, 30 - queueSongs.length)),
        ];

        console.log('lol: ', newTracks)

        await playTracks(newTracks);

        updateSelectedSoundscape({
          queueSongs: newTracks,
        });
      }
    })();
  }, [queueSongs]);
}
