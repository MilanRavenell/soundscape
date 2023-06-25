import theAlgorithm from '../../alogrithm';

export default async function genTracks(
  soundscape,
  spotifyAccessToken,
  limit=30,
) {

  return theAlgorithm(
    soundscape.seedSongs,
    soundscape.members.map(({ topSongs }) => topSongs).flat(),
    limit,
    spotifyAccessToken,
  );
}
