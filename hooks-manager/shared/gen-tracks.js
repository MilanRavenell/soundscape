import theAlgorithm from '../../alogrithm';

export default async function genTracks(
  soundscape,
  spotifyAccessToken,
  limit=30,
) {

  return theAlgorithm(
    soundscape.seedTracks,
    soundscape.members.map(({ topTracks }) => topTracks).flat(),
    limit,
    spotifyAccessToken,
  );
}
