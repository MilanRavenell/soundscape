/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const handleSpotifyAuthCode = /* GraphQL */ `
  mutation HandleSpotifyAuthCode($input: HandleSpotifyAuthCodeInput!) {
    handleSpotifyAuthCode(input: $input) {
      accessToken
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
    }
  }
`;
export const refreshSpotifyAccessToken = /* GraphQL */ `
  mutation RefreshSpotifyAccessToken($input: RefreshSpotifyAccessTokenInput!) {
    refreshSpotifyAccessToken(input: $input) {
      accessToken
    }
  }
`;
export const createSeedTrack = /* GraphQL */ `
  mutation CreateSeedTrack(
    $input: CreateSeedTrackInput!
    $condition: ModelSeedTrackConditionInput
  ) {
    createSeedTrack(input: $input, condition: $condition) {
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
export const updateSeedTrack = /* GraphQL */ `
  mutation UpdateSeedTrack(
    $input: UpdateSeedTrackInput!
    $condition: ModelSeedTrackConditionInput
  ) {
    updateSeedTrack(input: $input, condition: $condition) {
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
export const deleteSeedTrack = /* GraphQL */ `
  mutation DeleteSeedTrack(
    $input: DeleteSeedTrackInput!
    $condition: ModelSeedTrackConditionInput
  ) {
    deleteSeedTrack(input: $input, condition: $condition) {
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
export const createSoundscapeMember = /* GraphQL */ `
  mutation CreateSoundscapeMember(
    $input: CreateSoundscapeMemberInput!
    $condition: ModelSoundscapeMemberConditionInput
  ) {
    createSoundscapeMember(input: $input, condition: $condition) {
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
export const updateSoundscapeMember = /* GraphQL */ `
  mutation UpdateSoundscapeMember(
    $input: UpdateSoundscapeMemberInput!
    $condition: ModelSoundscapeMemberConditionInput
  ) {
    updateSoundscapeMember(input: $input, condition: $condition) {
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
export const deleteSoundscapeMember = /* GraphQL */ `
  mutation DeleteSoundscapeMember(
    $input: DeleteSoundscapeMemberInput!
    $condition: ModelSoundscapeMemberConditionInput
  ) {
    deleteSoundscapeMember(input: $input, condition: $condition) {
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
export const createSoundscape = /* GraphQL */ `
  mutation CreateSoundscape(
    $input: CreateSoundscapeInput!
    $condition: ModelSoundscapeConditionInput
  ) {
    createSoundscape(input: $input, condition: $condition) {
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
export const updateSoundscape = /* GraphQL */ `
  mutation UpdateSoundscape(
    $input: UpdateSoundscapeInput!
    $condition: ModelSoundscapeConditionInput
  ) {
    updateSoundscape(input: $input, condition: $condition) {
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
export const deleteSoundscape = /* GraphQL */ `
  mutation DeleteSoundscape(
    $input: DeleteSoundscapeInput!
    $condition: ModelSoundscapeConditionInput
  ) {
    deleteSoundscape(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
