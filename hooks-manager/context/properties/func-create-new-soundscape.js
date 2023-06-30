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
    const newSoundscape = {
      id: uuidv4(),
      name: 'New Soundscape',
      members: [user],
      seedTracks: [],
      queueTracks: [],
    };

    await createSoundscape({
      id: newSoundscape.id,
      name: newSoundscape.name,
    });

    await createSoundscapeMember({
      userId: user.id,
      soundscapeId: newSoundscape.id,
    })


    newSoundscape.queueTracks = await genTracks(newSoundscape, spotifyAccessToken);
    console.log('newSoundscape: ', newSoundscape);

    const newSoundscapes = [
      ...soundscapes,
      newSoundscape,
    ];

    setState('soundscapes', newSoundscapes);
    setState('selectedSoundscapeIndex', newSoundscapes.length - 1);
  }, [soundscapes, user, spotifyAccessToken, setState]);
}
