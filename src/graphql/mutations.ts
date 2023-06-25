/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSeedSong = /* GraphQL */ `
  mutation CreateSeedSong(
    $input: CreateSeedSongInput!
    $condition: ModelSeedSongConditionInput
  ) {
    createSeedSong(input: $input, condition: $condition) {
      key
      spotifyId
      userId
      soundscapeId
      name
      artists
      thumbnailUrl
      createdAt
      updatedAt
    }
  }
`;
export const updateSeedSong = /* GraphQL */ `
  mutation UpdateSeedSong(
    $input: UpdateSeedSongInput!
    $condition: ModelSeedSongConditionInput
  ) {
    updateSeedSong(input: $input, condition: $condition) {
      key
      spotifyId
      userId
      soundscapeId
      name
      artists
      thumbnailUrl
      createdAt
      updatedAt
    }
  }
`;
export const deleteSeedSong = /* GraphQL */ `
  mutation DeleteSeedSong(
    $input: DeleteSeedSongInput!
    $condition: ModelSeedSongConditionInput
  ) {
    deleteSeedSong(input: $input, condition: $condition) {
      key
      spotifyId
      userId
      soundscapeId
      name
      artists
      thumbnailUrl
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
      members
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
      members
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
      members
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
      id
      spotifyId
      displayName
      spotifyAccessToken
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
      id
      spotifyId
      displayName
      spotifyAccessToken
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
      id
      spotifyId
      displayName
      spotifyAccessToken
      createdAt
      updatedAt
    }
  }
`;
