import play from './play';

export default async function playTracks(
  tracks,
  position,
  spotifyAccessToken,
  setState,
) {
  await play(tracks.map(({ uri }) => uri), position, spotifyAccessToken);
  setState('curPlayingTrack', tracks[0]);
  setState('isPaused', false);
}
