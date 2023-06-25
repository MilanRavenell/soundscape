/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSeedSong = /* GraphQL */ `
  query GetSeedSong($key: String!) {
    getSeedSong(key: $key) {
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
export const listSeedSongs = /* GraphQL */ `
  query ListSeedSongs(
    $key: String
    $filter: ModelSeedSongFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listSeedSongs(
      key: $key
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getSoundscape = /* GraphQL */ `
  query GetSoundscape($id: ID!) {
    getSoundscape(id: $id) {
      id
      name
      members
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
        members
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      spotifyId
      displayName
      spotifyAccessToken
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        spotifyId
        displayName
        spotifyAccessToken
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
