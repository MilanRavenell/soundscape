import checkStorageForAccessToken from './check-storage-for-access-token';
import getPlaybackState from './get-playback-state';
import initSession from './init-session';
import handleSpotifyAuthSucess from './handle-spotify-auth-success';
import refillQueueSongs from './refill-queue-songs';
import searchSpotifyTracks from './search-spotify-tracks';

const effects = {
  checkStorageForAccessToken,
  getPlaybackState,
  initSession,
  handleSpotifyAuthSucess,
  refillQueueSongs,
  searchSpotifyTracks,
};

export default effects;
