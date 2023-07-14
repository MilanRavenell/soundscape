import axios from 'axios';
import { fetchTrackFromSpotify, genTracks } from '../../shared';

export default function initSession({
  context,
  state,
  setState,
  useEffect,
}) {
  const user = state.user;
  const spotifyAccessToken = state.spotifyAccessToken;
  const soundscapes = state.soundscapes;

  useEffect(() => {
    (async () => {
      console.log('cookie: ', user, spotifyAccessToken, soundscapes)
      if (!user || !spotifyAccessToken || soundscapes || context.domain.includes('invite')) {
        return;
      }

      try {
        const userResponse = await axios.get(
          'https://api.spotify.com/v1/me',
          {
            headers: {
              Authorization: `Bearer ${spotifyAccessToken}`,
            }
          },
        );

        const topSongsResponse = await axios.get(
          'https://api.spotify.com/v1/me/top/tracks',
          {
            headers: {
              Authorization: `Bearer ${spotifyAccessToken}`,
            }
          },
        );

        const userData = userResponse.data;
        const topTracks = topSongsResponse
          .data
          .items;

        console.log('user data: ', userData)
          
        const topTrackIds = topTracks.map(({ id }) => id);

        const userInfo = {
          id: userData.id,
          name: userData.display_name,
          profPicUrl: userData.images[0].url,
          topTracks,
        };

        await context.api.modifyUser({
          owner: user.owner,
          spotifyId: userInfo.id,
          displayName: userInfo.name,
          topTrackIds,
          profPicUrl: userInfo.profPicUrl,
        });

        const soundscapes = (user !== null)
          ? await Promise.all(user
              .soundscapes
              .items
              .map(async ({ soundscape }) => {
                const seedTracks = await Promise.all(
                  (await context.api.getSeedTracksBySoundscapeId(
                    soundscape.id
                  ))
                    .items
                    .map(async (seedTrack) => {
                      const track = await fetchTrackFromSpotify(
                        seedTrack.spotifyId,
                        spotifyAccessToken,
                      );

                      return {
                        ...track,
                        addedById: seedTrack.user.owner,
                        addedBy: seedTrack.user.displayName,
                      }
                    })
                );

                console.log('5: ', seedTracks)

                const members = await Promise.all(
                  (await context.api
                    .getSoundscapeMembersBySoundscapeId(soundscape.id))
                    .items
                    .map(async ({ user }) => {
                      const topTracks = await Promise.all(user
                        .topTrackIds
                        .map(async (id) => fetchTrackFromSpotify(
                          id,
                          spotifyAccessToken,
                        )));

                      return {
                        ...user,
                        topTracks,
                      }
                    })
                );
                
                console.log('members: ', members)

                const queueTracks = await genTracks({
                  members,
                  seedTracks,
                }, spotifyAccessToken);

                return {
                  ...soundscape,
                  members,
                  seedTracks,
                  queueTracks,
                }
            }))
          : [];

        
        setState('loginDialogOpen', false);
        setState('soundscapes', soundscapes);
        setState('user', {
          ...user,
          ...userInfo,
        });
      } catch (err) {
        console.error('Failed to init session', err);
      }
    })()
  }, [soundscapes, spotifyAccessToken, user]);
}
