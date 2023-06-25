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

  console.log(tracks)
  const response = await axios.put(
    'https://api.spotify.com/v1/me/player/play',
    {
      ...(tracks ? { uris: tracks.map(({ uri }) => uri) } : {}),
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
