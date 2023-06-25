/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSeedSong = /* GraphQL */ `
  subscription OnCreateSeedSong($filter: ModelSubscriptionSeedSongFilterInput) {
    onCreateSeedSong(filter: $filter) {
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
export const onUpdateSeedSong = /* GraphQL */ `
  subscription OnUpdateSeedSong($filter: ModelSubscriptionSeedSongFilterInput) {
    onUpdateSeedSong(filter: $filter) {
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
export const onDeleteSeedSong = /* GraphQL */ `
  subscription OnDeleteSeedSong($filter: ModelSubscriptionSeedSongFilterInput) {
    onDeleteSeedSong(filter: $filter) {
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
export const onCreateSoundscape = /* GraphQL */ `
  subscription OnCreateSoundscape(
    $filter: ModelSubscriptionSoundscapeFilterInput
  ) {
    onCreateSoundscape(filter: $filter) {
      id
      name
      members
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
      members
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
      members
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      spotifyId
      displayName
      spotifyAccessToken
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      spotifyId
      displayName
      spotifyAccessToken
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      spotifyId
      displayName
      spotifyAccessToken
      createdAt
      updatedAt
    }
  }
`;
