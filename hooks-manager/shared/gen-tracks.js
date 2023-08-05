import theAlgorithm from '../../alogrithm';

export default async function genTracks(
  soundscape,
  spotifyAccessToken,
  limit=30,
) {

  return theAlgorithm(
    soundscape.seedTracks.map((track) => ({ ...track, owner: track.addedById })),
    soundscape
      .members
      .map(({ owner, topTracks }) =>
        topTracks.map((track) => ({ owner, ...track }))
      ).flat(),
    soundscape.members.map(({ owner}) => owner),
    limit,
    spotifyAccessToken,
  );
}
