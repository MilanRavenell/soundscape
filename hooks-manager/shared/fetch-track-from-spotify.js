import axios from 'axios';
import rateLimit from 'axios-rate-limit';

const http = rateLimit(
  axios.create(),
  { maxRequests: 10000, perMilliseconds: 500, maxRPS: 2 }
);

export default async function fetchTrackFromSpotify(
  trackId,
  spotifyAccessToken,
) {
  if (!spotifyAccessToken) {
    return;
  }

  const response = await axios.get(
    `https://api.spotify.com/v1/tracks/${trackId}`,
    {
      headers: {
        Authorization: `Bearer ${spotifyAccessToken}`,
      }
    }
  );

  return response.data;
}
