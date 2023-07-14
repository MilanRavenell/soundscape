import checkStorageForSpotifyId from './check-storage-for-spotify-id';
import getInviteInfo from './get-invite-info';
import getPlaybackState from './get-playback-state';
import handleAccessTokenFromInvite from './handle-access-token-from-invite';
import initSession from './init-session';
import handleSpotifyAuthSucess from './handle-spotify-auth-success';
import refillQueueSongs from './refill-queue-songs';
import searchSpotifyTracks from './search-spotify-tracks';

const effects = {
  checkStorageForSpotifyId,
  getInviteInfo,
  getPlaybackState,
  handleAccessTokenFromInvite,
  initSession,
  handleSpotifyAuthSucess,
  refillQueueSongs,
  searchSpotifyTracks,
};

export default effects;
