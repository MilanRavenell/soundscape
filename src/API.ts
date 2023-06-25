/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSeedSongInput = {
  key: string,
  spotifyId: string,
  userId: string,
  soundscapeId: string,
  name: string,
  artists: Array< string >,
  thumbnailUrl: string,
};

export type ModelSeedSongConditionInput = {
  spotifyId?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  soundscapeId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  artists?: ModelStringInput | null,
  thumbnailUrl?: ModelStringInput | null,
  and?: Array< ModelSeedSongConditionInput | null > | null,
  or?: Array< ModelSeedSongConditionInput | null > | null,
  not?: ModelSeedSongConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type SeedSong = {
  __typename: "SeedSong",
  key: string,
  spotifyId: string,
  userId: string,
  soundscapeId: string,
  name: string,
  artists: Array< string >,
  thumbnailUrl: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSeedSongInput = {
  key: string,
  spotifyId?: string | null,
  userId?: string | null,
  soundscapeId?: string | null,
  name?: string | null,
  artists?: Array< string > | null,
  thumbnailUrl?: string | null,
};

export type DeleteSeedSongInput = {
  key: string,
};

export type CreateSoundscapeInput = {
  id?: string | null,
  name: string,
  members: Array< string | null >,
};

export type ModelSoundscapeConditionInput = {
  name?: ModelStringInput | null,
  members?: ModelStringInput | null,
  and?: Array< ModelSoundscapeConditionInput | null > | null,
  or?: Array< ModelSoundscapeConditionInput | null > | null,
  not?: ModelSoundscapeConditionInput | null,
};

export type Soundscape = {
  __typename: "Soundscape",
  id: string,
  name: string,
  members: Array< string | null >,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSoundscapeInput = {
  id: string,
  name?: string | null,
  members?: Array< string | null > | null,
};

export type DeleteSoundscapeInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  spotifyId: string,
  displayName: string,
  spotifyAccessToken: string,
};

export type ModelUserConditionInput = {
  spotifyId?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  spotifyAccessToken?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  spotifyId: string,
  displayName: string,
  spotifyAccessToken: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  spotifyId?: string | null,
  displayName?: string | null,
  spotifyAccessToken?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type ModelSeedSongFilterInput = {
  key?: ModelStringInput | null,
  spotifyId?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  soundscapeId?: ModelStringInput | null,
  name?: ModelStringInput | null,
  artists?: ModelStringInput | null,
  thumbnailUrl?: ModelStringInput | null,
  and?: Array< ModelSeedSongFilterInput | null > | null,
  or?: Array< ModelSeedSongFilterInput | null > | null,
  not?: ModelSeedSongFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSeedSongConnection = {
  __typename: "ModelSeedSongConnection",
  items:  Array<SeedSong | null >,
  nextToken?: string | null,
};

export type ModelSoundscapeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  members?: ModelStringInput | null,
  and?: Array< ModelSoundscapeFilterInput | null > | null,
  or?: Array< ModelSoundscapeFilterInput | null > | null,
  not?: ModelSoundscapeFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSoundscapeConnection = {
  __typename: "ModelSoundscapeConnection",
  items:  Array<Soundscape | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  spotifyId?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  spotifyAccessToken?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionSeedSongFilterInput = {
  key?: ModelSubscriptionStringInput | null,
  spotifyId?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
  soundscapeId?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  artists?: ModelSubscriptionStringInput | null,
  thumbnailUrl?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSeedSongFilterInput | null > | null,
  or?: Array< ModelSubscriptionSeedSongFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionSoundscapeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  members?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSoundscapeFilterInput | null > | null,
  or?: Array< ModelSubscriptionSoundscapeFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  spotifyId?: ModelSubscriptionStringInput | null,
  displayName?: ModelSubscriptionStringInput | null,
  spotifyAccessToken?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type CreateSeedSongMutationVariables = {
  input: CreateSeedSongInput,
  condition?: ModelSeedSongConditionInput | null,
};

export type CreateSeedSongMutation = {
  createSeedSong?:  {
    __typename: "SeedSong",
    key: string,
    spotifyId: string,
    userId: string,
    soundscapeId: string,
    name: string,
    artists: Array< string >,
    thumbnailUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSeedSongMutationVariables = {
  input: UpdateSeedSongInput,
  condition?: ModelSeedSongConditionInput | null,
};

export type UpdateSeedSongMutation = {
  updateSeedSong?:  {
    __typename: "SeedSong",
    key: string,
    spotifyId: string,
    userId: string,
    soundscapeId: string,
    name: string,
    artists: Array< string >,
    thumbnailUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSeedSongMutationVariables = {
  input: DeleteSeedSongInput,
  condition?: ModelSeedSongConditionInput | null,
};

export type DeleteSeedSongMutation = {
  deleteSeedSong?:  {
    __typename: "SeedSong",
    key: string,
    spotifyId: string,
    userId: string,
    soundscapeId: string,
    name: string,
    artists: Array< string >,
    thumbnailUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSoundscapeMutationVariables = {
  input: CreateSoundscapeInput,
  condition?: ModelSoundscapeConditionInput | null,
};

export type CreateSoundscapeMutation = {
  createSoundscape?:  {
    __typename: "Soundscape",
    id: string,
    name: string,
    members: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSoundscapeMutationVariables = {
  input: UpdateSoundscapeInput,
  condition?: ModelSoundscapeConditionInput | null,
};

export type UpdateSoundscapeMutation = {
  updateSoundscape?:  {
    __typename: "Soundscape",
    id: string,
    name: string,
    members: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSoundscapeMutationVariables = {
  input: DeleteSoundscapeInput,
  condition?: ModelSoundscapeConditionInput | null,
};

export type DeleteSoundscapeMutation = {
  deleteSoundscape?:  {
    __typename: "Soundscape",
    id: string,
    name: string,
    members: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    spotifyId: string,
    displayName: string,
    spotifyAccessToken: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    spotifyId: string,
    displayName: string,
    spotifyAccessToken: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    spotifyId: string,
    displayName: string,
    spotifyAccessToken: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetSeedSongQueryVariables = {
  key: string,
};

export type GetSeedSongQuery = {
  getSeedSong?:  {
    __typename: "SeedSong",
    key: string,
    spotifyId: string,
    userId: string,
    soundscapeId: string,
    name: string,
    artists: Array< string >,
    thumbnailUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSeedSongsQueryVariables = {
  key?: string | null,
  filter?: ModelSeedSongFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSeedSongsQuery = {
  listSeedSongs?:  {
    __typename: "ModelSeedSongConnection",
    items:  Array< {
      __typename: "SeedSong",
      key: string,
      spotifyId: string,
      userId: string,
      soundscapeId: string,
      name: string,
      artists: Array< string >,
      thumbnailUrl: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSoundscapeQueryVariables = {
  id: string,
};

export type GetSoundscapeQuery = {
  getSoundscape?:  {
    __typename: "Soundscape",
    id: string,
    name: string,
    members: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSoundscapesQueryVariables = {
  filter?: ModelSoundscapeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSoundscapesQuery = {
  listSoundscapes?:  {
    __typename: "ModelSoundscapeConnection",
    items:  Array< {
      __typename: "Soundscape",
      id: string,
      name: string,
      members: Array< string | null >,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    spotifyId: string,
    displayName: string,
    spotifyAccessToken: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      spotifyId: string,
      displayName: string,
      spotifyAccessToken: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSeedSongSubscriptionVariables = {
  filter?: ModelSubscriptionSeedSongFilterInput | null,
};

export type OnCreateSeedSongSubscription = {
  onCreateSeedSong?:  {
    __typename: "SeedSong",
    key: string,
    spotifyId: string,
    userId: string,
    soundscapeId: string,
    name: string,
    artists: Array< string >,
    thumbnailUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSeedSongSubscriptionVariables = {
  filter?: ModelSubscriptionSeedSongFilterInput | null,
};

export type OnUpdateSeedSongSubscription = {
  onUpdateSeedSong?:  {
    __typename: "SeedSong",
    key: string,
    spotifyId: string,
    userId: string,
    soundscapeId: string,
    name: string,
    artists: Array< string >,
    thumbnailUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSeedSongSubscriptionVariables = {
  filter?: ModelSubscriptionSeedSongFilterInput | null,
};

export type OnDeleteSeedSongSubscription = {
  onDeleteSeedSong?:  {
    __typename: "SeedSong",
    key: string,
    spotifyId: string,
    userId: string,
    soundscapeId: string,
    name: string,
    artists: Array< string >,
    thumbnailUrl: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSoundscapeSubscriptionVariables = {
  filter?: ModelSubscriptionSoundscapeFilterInput | null,
};

export type OnCreateSoundscapeSubscription = {
  onCreateSoundscape?:  {
    __typename: "Soundscape",
    id: string,
    name: string,
    members: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSoundscapeSubscriptionVariables = {
  filter?: ModelSubscriptionSoundscapeFilterInput | null,
};

export type OnUpdateSoundscapeSubscription = {
  onUpdateSoundscape?:  {
    __typename: "Soundscape",
    id: string,
    name: string,
    members: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSoundscapeSubscriptionVariables = {
  filter?: ModelSubscriptionSoundscapeFilterInput | null,
};

export type OnDeleteSoundscapeSubscription = {
  onDeleteSoundscape?:  {
    __typename: "Soundscape",
    id: string,
    name: string,
    members: Array< string | null >,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    spotifyId: string,
    displayName: string,
    spotifyAccessToken: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    spotifyId: string,
    displayName: string,
    spotifyAccessToken: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    spotifyId: string,
    displayName: string,
    spotifyAccessToken: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
