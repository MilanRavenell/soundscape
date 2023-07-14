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
      user {
        owner
        spotifyId
        displayName
        spotifyAccessToken
        spotifyRefreshToken
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
        profPicUrl
        createdAt
        updatedAt
      }
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
      user {
        owner
        spotifyId
        displayName
        spotifyAccessToken
        spotifyRefreshToken
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
        profPicUrl
        createdAt
        updatedAt
      }
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
      user {
        owner
        spotifyId
        displayName
        spotifyAccessToken
        spotifyRefreshToken
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
        profPicUrl
        createdAt
        updatedAt
      }
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
        owner
        spotifyId
        displayName
        spotifyAccessToken
        spotifyRefreshToken
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
        profPicUrl
        createdAt
        updatedAt
      }
      soundscape {
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
        coverTrackUrls
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
        owner
        spotifyId
        displayName
        spotifyAccessToken
        spotifyRefreshToken
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
        profPicUrl
        createdAt
        updatedAt
      }
      soundscape {
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
        coverTrackUrls
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
        owner
        spotifyId
        displayName
        spotifyAccessToken
        spotifyRefreshToken
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
        profPicUrl
        createdAt
        updatedAt
      }
      soundscape {
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
        coverTrackUrls
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
          user {
            owner
            spotifyId
            displayName
            spotifyAccessToken
            spotifyRefreshToken
            topTrackIds
            profPicUrl
            createdAt
            updatedAt
          }
          soundscape {
            id
            name
            coverTrackUrls
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      coverTrackUrls
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
          user {
            owner
            spotifyId
            displayName
            spotifyAccessToken
            spotifyRefreshToken
            topTrackIds
            profPicUrl
            createdAt
            updatedAt
          }
          soundscape {
            id
            name
            coverTrackUrls
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      coverTrackUrls
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
          user {
            owner
            spotifyId
            displayName
            spotifyAccessToken
            spotifyRefreshToken
            topTrackIds
            profPicUrl
            createdAt
            updatedAt
          }
          soundscape {
            id
            name
            coverTrackUrls
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      coverTrackUrls
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      owner
      spotifyId
      displayName
      spotifyAccessToken
      spotifyRefreshToken
      soundscapes {
        items {
          userId
          soundscapeId
          user {
            owner
            spotifyId
            displayName
            spotifyAccessToken
            spotifyRefreshToken
            topTrackIds
            profPicUrl
            createdAt
            updatedAt
          }
          soundscape {
            id
            name
            coverTrackUrls
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      topTrackIds
      profPicUrl
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      owner
      spotifyId
      displayName
      spotifyAccessToken
      spotifyRefreshToken
      soundscapes {
        items {
          userId
          soundscapeId
          user {
            owner
            spotifyId
            displayName
            spotifyAccessToken
            spotifyRefreshToken
            topTrackIds
            profPicUrl
            createdAt
            updatedAt
          }
          soundscape {
            id
            name
            coverTrackUrls
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      topTrackIds
      profPicUrl
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      owner
      spotifyId
      displayName
      spotifyAccessToken
      spotifyRefreshToken
      soundscapes {
        items {
          userId
          soundscapeId
          user {
            owner
            spotifyId
            displayName
            spotifyAccessToken
            spotifyRefreshToken
            topTrackIds
            profPicUrl
            createdAt
            updatedAt
          }
          soundscape {
            id
            name
            coverTrackUrls
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      topTrackIds
      profPicUrl
      createdAt
      updatedAt
    }
  }
`;
