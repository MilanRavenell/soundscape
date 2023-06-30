/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSeedTrack = /* GraphQL */ `
  subscription OnCreateSeedTrack(
    $filter: ModelSubscriptionSeedTrackFilterInput
  ) {
    onCreateSeedTrack(filter: $filter) {
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
export const onUpdateSeedTrack = /* GraphQL */ `
  subscription OnUpdateSeedTrack(
    $filter: ModelSubscriptionSeedTrackFilterInput
  ) {
    onUpdateSeedTrack(filter: $filter) {
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
export const onDeleteSeedTrack = /* GraphQL */ `
  subscription OnDeleteSeedTrack(
    $filter: ModelSubscriptionSeedTrackFilterInput
  ) {
    onDeleteSeedTrack(filter: $filter) {
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
export const onCreateSoundscapeMember = /* GraphQL */ `
  subscription OnCreateSoundscapeMember(
    $filter: ModelSubscriptionSoundscapeMemberFilterInput
  ) {
    onCreateSoundscapeMember(filter: $filter) {
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
export const onUpdateSoundscapeMember = /* GraphQL */ `
  subscription OnUpdateSoundscapeMember(
    $filter: ModelSubscriptionSoundscapeMemberFilterInput
  ) {
    onUpdateSoundscapeMember(filter: $filter) {
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
export const onDeleteSoundscapeMember = /* GraphQL */ `
  subscription OnDeleteSoundscapeMember(
    $filter: ModelSubscriptionSoundscapeMemberFilterInput
  ) {
    onDeleteSoundscapeMember(filter: $filter) {
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
export const onCreateSoundscape = /* GraphQL */ `
  subscription OnCreateSoundscape(
    $filter: ModelSubscriptionSoundscapeFilterInput
  ) {
    onCreateSoundscape(filter: $filter) {
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
export const onUpdateSoundscape = /* GraphQL */ `
  subscription OnUpdateSoundscape(
    $filter: ModelSubscriptionSoundscapeFilterInput
  ) {
    onUpdateSoundscape(filter: $filter) {
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
export const onDeleteSoundscape = /* GraphQL */ `
  subscription OnDeleteSoundscape(
    $filter: ModelSubscriptionSoundscapeFilterInput
  ) {
    onDeleteSoundscape(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
