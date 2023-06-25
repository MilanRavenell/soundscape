import getPlaybackState from './get-playback-state';
import getSpotifyUser from './get-spotify-user';
import handleSpotifyAuthSucess from './handle-spotify-auth-success';
import refillQueueSongs from './refill-queue-songs';
import searchSpotifyTracks from './search-spotify-tracks';

const effects = {
  getPlaybackState,
  getSpotifyUser,
  handleSpotifyAuthSucess,
  refillQueueSongs,
  searchSpotifyTracks,
};

export default effects;
