import axios from 'axios';

export default async function play(
  tracks,
  position_ms,
  spotifyAccessToken,
  setState,
) {
  console.log('position_ms: ', position_ms);
  if (!spotifyAccessToken) {
    return;
  }

  
  const uris = tracks.map(({ uri }) => uri);
  console.log('uris: ', uris);

  // ensure shuffle is off
  await axios.put(
    'https://api.spotify.com/v1/me/player/shuffle?state=false',
    {},
    {
      headers: {
        Authorization: `Bearer ${spotifyAccessToken}`,
      }
    }
  );

  const response = await axios.put(
    'https://api.spotify.com/v1/me/player/play',
    {
      ...(uris ? { uris } : {}),
      ...(position_ms ? { position_ms } : {}),
    },
    {
      headers: {
        Authorization: `Bearer ${spotifyAccessToken}`,
      }
    }
  );

  console.log('play: ', response);

  setState('activated', true);
  setState('curPlayingTrack', tracks[0]);
}
