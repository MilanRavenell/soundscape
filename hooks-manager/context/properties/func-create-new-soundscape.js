import { genTracks } from '../../shared';
import { createSoundscape, createSoundscapeMember} from '../../../graphql-api';
const { v4: uuidv4 } = require('uuid');

export default function funcCreateNewSoundscape({
  state,
  setState,
  useCallback,
}) {
  const soundscapes = state.soundscapes;
  const user = state.user;
  const spotifyAccessToken = state.spotifyAccessToken;

  return useCallback(async () => {
    setState('newSoundscapeLoading', true);

    const newSoundscape = {
      id: uuidv4(),
      name: 'New Soundscape',
      members: [user],
      seedTracks: [],
      queueTracks: [],
    };

    newSoundscape.queueTracks = await genTracks(newSoundscape, spotifyAccessToken);
    console.log('newSoundscape: ', newSoundscape);

    newSoundscape.coverTrackUrls = user.topTracks
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value.album.images[0].url)
      .slice(0,4);

    console.log('newSoundscape:', newSoundscape);

    const newSoundscapes = [
      ...soundscapes,
      newSoundscape,
    ];

    setState('soundscapes', newSoundscapes);
    setState('selectedSoundscapeIndex', newSoundscapes.length - 1);
    setState('newSoundscapeLoading', false);

    await createSoundscape({
      id: newSoundscape.id,
      name: newSoundscape.name,
      coverTrackUrls: newSoundscape.coverTrackUrls,
    });

    await createSoundscapeMember({
      userId: user.owner,
      soundscapeId: newSoundscape.id,
    });
  }, [soundscapes, user, spotifyAccessToken, setState]);
}
