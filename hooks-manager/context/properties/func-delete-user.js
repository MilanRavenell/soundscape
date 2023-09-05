import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    deleteUser,
    deleteSoundscapeMember,
    getSeedTracksByUserId,
    deleteSeedTrack,
} from '../../../graphql-api';

export default function funcDeleteUser({
  state,
  setState,
  useCallback,
}) {
  const selectedSoundscapeIndex = state.selectedSoundscapeIndex;
  const soundscapes = state.soundscapes;
  const user = state.user;

  return useCallback(async () => {
    // delete user record
    await deleteUser(user.owner);

    // delete sounscape member records with user
    const soundscapes = user.soundscapes.items;
    await Promise.all(soundscapes.map(async ({ soundscapeId }) => 
        deleteSoundscapeMember({
            userId: user.owner,
            soundscapeId,
        })
    ))

    // delete seed track records with user
    const seedTracks = await getSeedTracksByUserId(user.owner);
    console.log('seedTracks', seedTracks)
    await Promise.all(seedTracks.items.map(async (seedTrack) =>
        deleteSeedTrack(seedTrack)
    ));

    // remove user id cookie
    await AsyncStorage.removeItem('@app:spotifyId');

    setState('selectedSoundscapeIndex', null);
    setState('soundscapes', null);
    setState('homeOptionsModalOpen', false);
    setState('user', null);
    setState('accessTokenValid', false);
    setState('spotifyAccessToken', null);
  }, [soundscapes, selectedSoundscapeIndex, user, setState]);
}
