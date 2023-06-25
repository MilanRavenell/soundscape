import { genTracks } from '../../shared';

export default function funcCreateNewSoundscape({
  state,
  setState,
  useCallback,
}) {
  const soundscapes = state.soundscapes;
  const user = state.user;
  const spotifyAccessToken = state.spotifyAccessToken;

  return useCallback(async () => {
    const newSoundscape = {
      id: 'bigballer',
      name: 'New Soundscape',
      members: [user],
      seedSongs: [],
      queueSongs: [],
    };

    newSoundscape.queueSongs = await genTracks(newSoundscape, spotifyAccessToken);
    console.log('newSoundscape: ', newSoundscape);

    const newSoundscapes = [
      ...soundscapes,
      newSoundscape,
    ];

    setState('soundscapes', newSoundscapes);
    setState('selectedSoundscapeIndex', newSoundscapes.length - 1);
  }, [soundscapes, user, setState]);
}
