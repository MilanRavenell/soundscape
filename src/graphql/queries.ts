/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSeedTrack = /* GraphQL */ `
  query GetSeedTrack($key: String!) {
    getSeedTrack(key: $key) {
      key
      spotifyId
      soundscapeId
      userId
      name
      artists
      thumbnailUrl
      createdAt
      updatedAt
    }
  }
`;
export const listSeedTracks = /* GraphQL */ `
  query ListSeedTracks(
    $key: String
    $filter: ModelSeedTrackFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSeedTracks(
      key: $key
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        key
        spotifyId
        soundscapeId
        userId
        name
        artists
        thumbnailUrl
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSoundscapeMember = /* GraphQL */ `
  query GetSoundscapeMember($userId: String!, $soundscapeId: String!) {
    getSoundscapeMember(userId: $userId, soundscapeId: $soundscapeId) {
      userId
      soundscapeId
      user {
        spotifyId
        displayName
        spotifyAccessToken
        soundscapes {
          nextToken
        }
        topTrackIds
        createdAt
        updatedAt
      }
      soundscape {
        id
        name
        members {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSoundscapeMembers = /* GraphQL */ `
  query ListSoundscapeMembers(
    $userId: String
    $soundscapeId: ModelStringKeyConditionInput
    $filter: ModelSoundscapeMemberFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSoundscapeMembers(
      userId: $userId
      soundscapeId: $soundscapeId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        userId
        soundscapeId
        user {
          spotifyId
          displayName
          spotifyAccessToken
          topTrackIds
          createdAt
          updatedAt
        }
        soundscape {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSoundscape = /* GraphQL */ `
  query GetSoundscape($id: ID!) {
    getSoundscape(id: $id) {
      id
      name
      members {
        items {
          userId
          soundscapeId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSoundscapes = /* GraphQL */ `
  query ListSoundscapes(
    $filter: ModelSoundscapeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSoundscapes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        members {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($spotifyId: String!) {
    getUser(spotifyId: $spotifyId) {
      spotifyId
      displayName
      spotifyAccessToken
      soundscapes {
        items {
          userId
          soundscapeId
          createdAt
          updatedAt
        }
        nextToken
      }
      topTrackIds
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $spotifyId: String
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      spotifyId: $spotifyId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        spotifyId
        displayName
        spotifyAccessToken
        soundscapes {
          nextToken
        }
        topTrackIds
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const seedTracksBySoundscapeIdAndUserId = /* GraphQL */ `
  query SeedTracksBySoundscapeIdAndUserId(
    $soundscapeId: String!
    $userId: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSeedTrackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    seedTracksBySoundscapeIdAndUserId(
      soundscapeId: $soundscapeId
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        key
        spotifyId
        soundscapeId
        userId
        name
        artists
        thumbnailUrl
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const soundscapeMemberBySoundscapeId = /* GraphQL */ `
  query SoundscapeMemberBySoundscapeId(
    $soundscapeId: String!
    $userId: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSoundscapeMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    soundscapeMemberBySoundscapeId(
      soundscapeId: $soundscapeId
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        userId
        soundscapeId
        user {
          spotifyId
          displayName
          spotifyAccessToken
          topTrackIds
          createdAt
          updatedAt
        }
        soundscape {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
