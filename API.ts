/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type HandleSpotifyAuthCodeInput = {
  code: string,
  redirectUri: string,
};

export type HandleSpotifyAuthCodeResponse = {
  __typename: "HandleSpotifyAuthCodeResponse",
  accessToken?: string | null,
  user?: User | null,
};

export type User = {
  __typename: "User",
  owner: string,
  spotifyId?: string | null,
  displayName?: string | null,
  spotifyAccessToken?: string | null,
  spotifyRefreshToken?: string | null,
  soundscapes?: ModelSoundscapeMemberConnection | null,
  topTrackIds?: Array< string > | null,
  profPicUrl?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelSoundscapeMemberConnection = {
  __typename: "ModelSoundscapeMemberConnection",
  items:  Array<SoundscapeMember | null >,
  nextToken?: string | null,
};

export type SoundscapeMember = {
  __typename: "SoundscapeMember",
  userId: string,
  soundscapeId: string,
  user?: User | null,
  soundscape?: Soundscape | null,
  createdAt: string,
  updatedAt: string,
};

export type Soundscape = {
  __typename: "Soundscape",
  id: string,
  name: string,
  members?: ModelSoundscapeMemberConnection | null,
  coverTrackUrls: Array< string >,
  createdAt: string,
  updatedAt: string,
};

export type RefreshSpotifyAccessTokenInput = {
  owner: string,
};

export type RefreshSpotifyAccessTokenResponse = {
  __typename: "RefreshSpotifyAccessTokenResponse",
  accessToken?: string | null,
};

export type CreateSeedTrackInput = {
  key: string,
  spotifyId: string,
  soundscapeId: string,
  userId: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelSeedTrackConditionInput = {
  spotifyId?: ModelStringInput | null,
  soundscapeId?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSeedTrackConditionInput | null > | null,
  or?: Array< ModelSeedTrackConditionInput | null > | null,
  not?: ModelSeedTrackConditionInput | null,
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

export type SeedTrack = {
  __typename: "SeedTrack",
  key: string,
  spotifyId: string,
  soundscapeId: string,
  userId: string,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSeedTrackInput = {
  key: string,
  spotifyId?: string | null,
  soundscapeId?: string | null,
  userId?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteSeedTrackInput = {
  key: string,
};

export type CreateSoundscapeMemberInput = {
  userId: string,
  soundscapeId: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelSoundscapeMemberConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSoundscapeMemberConditionInput | null > | null,
  or?: Array< ModelSoundscapeMemberConditionInput | null > | null,
  not?: ModelSoundscapeMemberConditionInput | null,
};

export type UpdateSoundscapeMemberInput = {
  userId: string,
  soundscapeId: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteSoundscapeMemberInput = {
  userId: string,
  soundscapeId: string,
};

export type CreateSoundscapeInput = {
  id?: string | null,
  name: string,
  coverTrackUrls: Array< string >,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelSoundscapeConditionInput = {
  id?: ModelStringInput | null,
  name?: ModelStringInput | null,
  coverTrackUrls?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSoundscapeConditionInput | null > | null,
  or?: Array< ModelSoundscapeConditionInput | null > | null,
  not?: ModelSoundscapeConditionInput | null,
};

export type UpdateSoundscapeInput = {
  id: string,
  name?: string | null,
  coverTrackUrls?: Array< string > | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteSoundscapeInput = {
  id: string,
};

export type CreateUserInput = {
  owner: string,
  spotifyId?: string | null,
  displayName?: string | null,
  spotifyAccessToken?: string | null,
  spotifyRefreshToken?: string | null,
  topTrackIds?: Array< string > | null,
  profPicUrl?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelUserConditionInput = {
  spotifyId?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  spotifyAccessToken?: ModelStringInput | null,
  spotifyRefreshToken?: ModelStringInput | null,
  topTrackIds?: ModelStringInput | null,
  profPicUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  owner: string,
  spotifyId?: string | null,
  displayName?: string | null,
  spotifyAccessToken?: string | null,
  spotifyRefreshToken?: string | null,
  topTrackIds?: Array< string > | null,
  profPicUrl?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteUserInput = {
  owner: string,
};

export type ModelSeedTrackFilterInput = {
  key?: ModelStringInput | null,
  spotifyId?: ModelStringInput | null,
  soundscapeId?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSeedTrackFilterInput | null > | null,
  or?: Array< ModelSeedTrackFilterInput | null > | null,
  not?: ModelSeedTrackFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSeedTrackConnection = {
  __typename: "ModelSeedTrackConnection",
  items:  Array<SeedTrack | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelSoundscapeMemberFilterInput = {
  userId?: ModelStringInput | null,
  soundscapeId?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSoundscapeMemberFilterInput | null > | null,
  or?: Array< ModelSoundscapeMemberFilterInput | null > | null,
  not?: ModelSoundscapeMemberFilterInput | null,
};

export type ModelSoundscapeFilterInput = {
  id?: ModelStringInput | null,
  name?: ModelStringInput | null,
  coverTrackUrls?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelSoundscapeFilterInput | null > | null,
  or?: Array< ModelSoundscapeFilterInput | null > | null,
  not?: ModelSoundscapeFilterInput | null,
};

export type ModelSoundscapeConnection = {
  __typename: "ModelSoundscapeConnection",
  items:  Array<Soundscape | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  owner?: ModelStringInput | null,
  spotifyId?: ModelStringInput | null,
  displayName?: ModelStringInput | null,
  spotifyAccessToken?: ModelStringInput | null,
  spotifyRefreshToken?: ModelStringInput | null,
  topTrackIds?: ModelStringInput | null,
  profPicUrl?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionSeedTrackFilterInput = {
  key?: ModelSubscriptionStringInput | null,
  spotifyId?: ModelSubscriptionStringInput | null,
  soundscapeId?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSeedTrackFilterInput | null > | null,
  or?: Array< ModelSubscriptionSeedTrackFilterInput | null > | null,
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

export type ModelSubscriptionSoundscapeMemberFilterInput = {
  userId?: ModelSubscriptionStringInput | null,
  soundscapeId?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSoundscapeMemberFilterInput | null > | null,
  or?: Array< ModelSubscriptionSoundscapeMemberFilterInput | null > | null,
};

export type ModelSubscriptionSoundscapeFilterInput = {
  id?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  coverTrackUrls?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSoundscapeFilterInput | null > | null,
  or?: Array< ModelSubscriptionSoundscapeFilterInput | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  owner?: ModelSubscriptionStringInput | null,
  spotifyId?: ModelSubscriptionStringInput | null,
  displayName?: ModelSubscriptionStringInput | null,
  spotifyAccessToken?: ModelSubscriptionStringInput | null,
  spotifyRefreshToken?: ModelSubscriptionStringInput | null,
  topTrackIds?: ModelSubscriptionStringInput | null,
  profPicUrl?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type HandleSpotifyAuthCodeMutationVariables = {
  input: HandleSpotifyAuthCodeInput,
};

export type HandleSpotifyAuthCodeMutation = {
  handleSpotifyAuthCode:  {
    __typename: "HandleSpotifyAuthCodeResponse",
    accessToken?: string | null,
    user?:  {
      __typename: "User",
      owner: string,
      spotifyId?: string | null,
      displayName?: string | null,
      spotifyAccessToken?: string | null,
      spotifyRefreshToken?: string | null,
      soundscapes?:  {
        __typename: "ModelSoundscapeMemberConnection",
        items:  Array< {
          __typename: "SoundscapeMember",
          userId: string,
          soundscapeId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      topTrackIds?: Array< string > | null,
      profPicUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  },
};

export type RefreshSpotifyAccessTokenMutationVariables = {
  input: RefreshSpotifyAccessTokenInput,
};

export type RefreshSpotifyAccessTokenMutation = {
  refreshSpotifyAccessToken:  {
    __typename: "RefreshSpotifyAccessTokenResponse",
    accessToken?: string | null,
  },
};

export type CreateSeedTrackMutationVariables = {
  input: CreateSeedTrackInput,
  condition?: ModelSeedTrackConditionInput | null,
};

export type CreateSeedTrackMutation = {
  createSeedTrack?:  {
    __typename: "SeedTrack",
    key: string,
    spotifyId: string,
    soundscapeId: string,
    userId: string,
    user?:  {
      __typename: "User",
      owner: string,
      spotifyId?: string | null,
      displayName?: string | null,
      spotifyAccessToken?: string | null,
      spotifyRefreshToken?: string | null,
      soundscapes?:  {
        __typename: "ModelSoundscapeMemberConnection",
        items:  Array< {
          __typename: "SoundscapeMember",
          userId: string,
          soundscapeId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      topTrackIds?: Array< string > | null,
      profPicUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSeedTrackMutationVariables = {
  input: UpdateSeedTrackInput,
  condition?: ModelSeedTrackConditionInput | null,
};

export type UpdateSeedTrackMutation = {
  updateSeedTrack?:  {
    __typename: "SeedTrack",
    key: string,
    spotifyId: string,
    soundscapeId: string,
    userId: string,
    user?:  {
      __typename: "User",
      owner: string,
      spotifyId?: string | null,
      displayName?: string | null,
      spotifyAccessToken?: string | null,
      spotifyRefreshToken?: string | null,
      soundscapes?:  {
        __typename: "ModelSoundscapeMemberConnection",
        items:  Array< {
          __typename: "SoundscapeMember",
          userId: string,
          soundscapeId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      topTrackIds?: Array< string > | null,
      profPicUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSeedTrackMutationVariables = {
  input: DeleteSeedTrackInput,
  condition?: ModelSeedTrackConditionInput | null,
};

export type DeleteSeedTrackMutation = {
  deleteSeedTrack?:  {
    __typename: "SeedTrack",
    key: string,
    spotifyId: string,
    soundscapeId: string,
    userId: string,
    user?:  {
      __typename: "User",
      owner: string,
      spotifyId?: string | null,
      displayName?: string | null,
      spotifyAccessToken?: string | null,
      spotifyRefreshToken?: string | null,
      soundscapes?:  {
        __typename: "ModelSoundscapeMemberConnection",
        items:  Array< {
          __typename: "SoundscapeMember",
          userId: string,
          soundscapeId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      topTrackIds?: Array< string > | null,
      profPicUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSoundscapeMemberMutationVariables = {
  input: CreateSoundscapeMemberInput,
  condition?: ModelSoundscapeMemberConditionInput | null,
};

export type CreateSoundscapeMemberMutation = {
  createSoundscapeMember?:  {
    __typename: "SoundscapeMember",
    userId: string,
    soundscapeId: string,
    user?:  {
      __typename: "User",
      owner: string,
      spotifyId?: string | null,
      displayName?: string | null,
      spotifyAccessToken?: string | null,
      spotifyRefreshToken?: string | null,
      soundscapes?:  {
        __typename: "ModelSoundscapeMemberConnection",
        items:  Array< {
          __typename: "SoundscapeMember",
          userId: string,
          soundscapeId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      topTrackIds?: Array< string > | null,
      profPicUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    soundscape?:  {
      __typename: "Soundscape",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelSoundscapeMemberConnection",
        items:  Array< {
          __typename: "SoundscapeMember",
          userId: string,
          soundscapeId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      coverTrackUrls: Array< string >,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSoundscapeMemberMutationVariables = {
  input: UpdateSoundscapeMemberInput,
  condition?: ModelSoundscapeMemberConditionInput | null,
};

export type UpdateSoundscapeMemberMutation = {
  updateSoundscapeMember?:  {
    __typename: "SoundscapeMember",
    userId: string,
    soundscapeId: string,
    user?:  {
      __typename: "User",
      owner: string,
      spotifyId?: string | null,
      displayName?: string | null,
      spotifyAccessToken?: string | null,
      spotifyRefreshToken?: string | null,
      soundscapes?:  {
        __typename: "ModelSoundscapeMemberConnection",
        items:  Array< {
          __typename: "SoundscapeMember",
          userId: string,
          soundscapeId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      topTrackIds?: Array< string > | null,
      profPicUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    soundscape?:  {
      __typename: "Soundscape",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelSoundscapeMemberConnection",
        items:  Array< {
          __typename: "SoundscapeMember",
          userId: string,
          soundscapeId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      coverTrackUrls: Array< string >,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSoundscapeMemberMutationVariables = {
  input: DeleteSoundscapeMemberInput,
  condition?: ModelSoundscapeMemberConditionInput | null,
};

export type DeleteSoundscapeMemberMutation = {
  deleteSoundscapeMember?:  {
    __typename: "SoundscapeMember",
    userId: string,
    soundscapeId: string,
    user?:  {
      __typename: "User",
      owner: string,
      spotifyId?: string | null,
      displayName?: string | null,
      spotifyAccessToken?: string | null,
      spotifyRefreshToken?: string | null,
      soundscapes?:  {
        __typename: "ModelSoundscapeMemberConnection",
        items:  Array< {
          __typename: "SoundscapeMember",
          userId: string,
          soundscapeId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      topTrackIds?: Array< string > | null,
      profPicUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    soundscape?:  {
      __typename: "Soundscape",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelSoundscapeMemberConnection",
        items:  Array< {
          __typename: "SoundscapeMember",
          userId: string,
          soundscapeId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      coverTrackUrls: Array< string >,
      createdAt: string,
      updatedAt: string,
    } | null,
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
    members?:  {
      __typename: "ModelSoundscapeMemberConnection",
      items:  Array< {
        __typename: "SoundscapeMember",
        userId: string,
        soundscapeId: string,
        user?:  {
          __typename: "User",
          owner: string,
          spotifyId?: string | null,
          displayName?: string | null,
          spotifyAccessToken?: string | null,
          spotifyRefreshToken?: string | null,
          topTrackIds?: Array< string > | null,
          profPicUrl?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        soundscape?:  {
          __typename: "Soundscape",
          id: string,
          name: string,
          coverTrackUrls: Array< string >,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    coverTrackUrls: Array< string >,
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
    members?:  {
      __typename: "ModelSoundscapeMemberConnection",
      items:  Array< {
        __typename: "SoundscapeMember",
        userId: string,
        soundscapeId: string,
        user?:  {
          __typename: "User",
          owner: string,
          spotifyId?: string | null,
          displayName?: string | null,
          spotifyAccessToken?: string | null,
          spotifyRefreshToken?: string | null,
          topTrackIds?: Array< string > | null,
          profPicUrl?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        soundscape?:  {
          __typename: "Soundscape",
          id: string,
          name: string,
          coverTrackUrls: Array< string >,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    coverTrackUrls: Array< string >,
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
    members?:  {
      __typename: "ModelSoundscapeMemberConnection",
      items:  Array< {
        __typename: "SoundscapeMember",
        userId: string,
        soundscapeId: string,
        user?:  {
          __typename: "User",
          owner: string,
          spotifyId?: string | null,
          displayName?: string | null,
          spotifyAccessToken?: string | null,
          spotifyRefreshToken?: string | null,
          topTrackIds?: Array< string > | null,
          profPicUrl?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        soundscape?:  {
          __typename: "Soundscape",
          id: string,
          name: string,
          coverTrackUrls: Array< string >,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    coverTrackUrls: Array< string >,
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
    owner: string,
    spotifyId?: string | null,
    displayName?: string | null,
    spotifyAccessToken?: string | null,
    spotifyRefreshToken?: string | null,
    soundscapes?:  {
      __typename: "ModelSoundscapeMemberConnection",
      items:  Array< {
        __typename: "SoundscapeMember",
        userId: string,
        soundscapeId: string,
        user?:  {
          __typename: "User",
          owner: string,
          spotifyId?: string | null,
          displayName?: string | null,
          spotifyAccessToken?: string | null,
          spotifyRefreshToken?: string | null,
          topTrackIds?: Array< string > | null,
          profPicUrl?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        soundscape?:  {
          __typename: "Soundscape",
          id: string,
          name: string,
          coverTrackUrls: Array< string >,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    topTrackIds?: Array< string > | null,
    profPicUrl?: string | null,
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
    owner: string,
    spotifyId?: string | null,
    displayName?: string | null,
    spotifyAccessToken?: string | null,
    spotifyRefreshToken?: string | null,
    soundscapes?:  {
      __typename: "ModelSoundscapeMemberConnection",
      items:  Array< {
        __typename: "SoundscapeMember",
        userId: string,
        soundscapeId: string,
        user?:  {
          __typename: "User",
          owner: string,
          spotifyId?: string | null,
          displayName?: string | null,
          spotifyAccessToken?: string | null,
          spotifyRefreshToken?: string | null,
          topTrackIds?: Array< string > | null,
          profPicUrl?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        soundscape?:  {
          __typename: "Soundscape",
          id: string,
          name: string,
          coverTrackUrls: Array< string >,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    topTrackIds?: Array< string > | null,
    profPicUrl?: string | null,
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
    owner: string,
    spotifyId?: string | null,
    displayName?: string | null,
    spotifyAccessToken?: string | null,
    spotifyRefreshToken?: string | null,
    soundscapes?:  {
      __typename: "ModelSoundscapeMemberConnection",
      items:  Array< {
        __typename: "SoundscapeMember",
        userId: string,
        soundscapeId: string,
        user?:  {
          __typename: "User",
          owner: string,
          spotifyId?: string | null,
          displayName?: string | null,
          spotifyAccessToken?: string | null,
          spotifyRefreshToken?: string | null,
          topTrackIds?: Array< string > | null,
          profPicUrl?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        soundscape?:  {
          __typename: "Soundscape",
          id: string,
          name: string,
          coverTrackUrls: Array< string >,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    topTrackIds?: Array< string > | null,
    profPicUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetSeedTrackQueryVariables = {
  key: string,
};

export type GetSeedTrackQuery = {
  getSeedTrack?:  {
    __typename: "SeedTrack",
    key: string,
    spotifyId: string,
    soundscapeId: string,
    userId: string,
    user?:  {
      __typename: "User",
      owner: string,
      spotifyId?: string | null,
      displayName?: string | null,
      spotifyAccessToken?: string | null,
      spotifyRefreshToken?: string | null,
      soundscapes?:  {
        __typename: "ModelSoundscapeMemberConnection",
        items:  Array< {
          __typename: "SoundscapeMember",
          userId: string,
          soundscapeId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      topTrackIds?: Array< string > | null,
      profPicUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSeedTracksQueryVariables = {
  key?: string | null,
  filter?: ModelSeedTrackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSeedTracksQuery = {
  listSeedTracks?:  {
    __typename: "ModelSeedTrackConnection",
    items:  Array< {
      __typename: "SeedTrack",
      key: string,
      spotifyId: string,
      soundscapeId: string,
      userId: string,
      user?:  {
        __typename: "User",
        owner: string,
        spotifyId?: string | null,
        displayName?: string | null,
        spotifyAccessToken?: string | null,
        spotifyRefreshToken?: string | null,
        soundscapes?:  {
          __typename: "ModelSoundscapeMemberConnection",
          nextToken?: string | null,
        } | null,
        topTrackIds?: Array< string > | null,
        profPicUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSoundscapeMemberQueryVariables = {
  userId: string,
  soundscapeId: string,
};

export type GetSoundscapeMemberQuery = {
  getSoundscapeMember?:  {
    __typename: "SoundscapeMember",
    userId: string,
    soundscapeId: string,
    user?:  {
      __typename: "User",
      owner: string,
      spotifyId?: string | null,
      displayName?: string | null,
      spotifyAccessToken?: string | null,
      spotifyRefreshToken?: string | null,
      soundscapes?:  {
        __typename: "ModelSoundscapeMemberConnection",
        items:  Array< {
          __typename: "SoundscapeMember",
          userId: string,
          soundscapeId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      topTrackIds?: Array< string > | null,
      profPicUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    soundscape?:  {
      __typename: "Soundscape",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelSoundscapeMemberConnection",
        items:  Array< {
          __typename: "SoundscapeMember",
          userId: string,
          soundscapeId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      coverTrackUrls: Array< string >,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSoundscapeMembersQueryVariables = {
  userId?: string | null,
  soundscapeId?: ModelStringKeyConditionInput | null,
  filter?: ModelSoundscapeMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSoundscapeMembersQuery = {
  listSoundscapeMembers?:  {
    __typename: "ModelSoundscapeMemberConnection",
    items:  Array< {
      __typename: "SoundscapeMember",
      userId: string,
      soundscapeId: string,
      user?:  {
        __typename: "User",
        owner: string,
        spotifyId?: string | null,
        displayName?: string | null,
        spotifyAccessToken?: string | null,
        spotifyRefreshToken?: string | null,
        soundscapes?:  {
          __typename: "ModelSoundscapeMemberConnection",
          nextToken?: string | null,
        } | null,
        topTrackIds?: Array< string > | null,
        profPicUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      soundscape?:  {
        __typename: "Soundscape",
        id: string,
        name: string,
        members?:  {
          __typename: "ModelSoundscapeMemberConnection",
          nextToken?: string | null,
        } | null,
        coverTrackUrls: Array< string >,
        createdAt: string,
        updatedAt: string,
      } | null,
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
    members?:  {
      __typename: "ModelSoundscapeMemberConnection",
      items:  Array< {
        __typename: "SoundscapeMember",
        userId: string,
        soundscapeId: string,
        user?:  {
          __typename: "User",
          owner: string,
          spotifyId?: string | null,
          displayName?: string | null,
          spotifyAccessToken?: string | null,
          spotifyRefreshToken?: string | null,
          topTrackIds?: Array< string > | null,
          profPicUrl?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        soundscape?:  {
          __typename: "Soundscape",
          id: string,
          name: string,
          coverTrackUrls: Array< string >,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    coverTrackUrls: Array< string >,
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
      members?:  {
        __typename: "ModelSoundscapeMemberConnection",
        items:  Array< {
          __typename: "SoundscapeMember",
          userId: string,
          soundscapeId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      coverTrackUrls: Array< string >,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  owner: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    owner: string,
    spotifyId?: string | null,
    displayName?: string | null,
    spotifyAccessToken?: string | null,
    spotifyRefreshToken?: string | null,
    soundscapes?:  {
      __typename: "ModelSoundscapeMemberConnection",
      items:  Array< {
        __typename: "SoundscapeMember",
        userId: string,
        soundscapeId: string,
        user?:  {
          __typename: "User",
          owner: string,
          spotifyId?: string | null,
          displayName?: string | null,
          spotifyAccessToken?: string | null,
          spotifyRefreshToken?: string | null,
          topTrackIds?: Array< string > | null,
          profPicUrl?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        soundscape?:  {
          __typename: "Soundscape",
          id: string,
          name: string,
          coverTrackUrls: Array< string >,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    topTrackIds?: Array< string > | null,
    profPicUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  owner?: string | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      owner: string,
      spotifyId?: string | null,
      displayName?: string | null,
      spotifyAccessToken?: string | null,
      spotifyRefreshToken?: string | null,
      soundscapes?:  {
        __typename: "ModelSoundscapeMemberConnection",
        items:  Array< {
          __typename: "SoundscapeMember",
          userId: string,
          soundscapeId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      topTrackIds?: Array< string > | null,
      profPicUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SeedTracksBySoundscapeIdAndUserIdQueryVariables = {
  soundscapeId: string,
  userId?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSeedTrackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SeedTracksBySoundscapeIdAndUserIdQuery = {
  seedTracksBySoundscapeIdAndUserId?:  {
    __typename: "ModelSeedTrackConnection",
    items:  Array< {
      __typename: "SeedTrack",
      key: string,
      spotifyId: string,
      soundscapeId: string,
      userId: string,
      user?:  {
        __typename: "User",
        owner: string,
        spotifyId?: string | null,
        displayName?: string | null,
        spotifyAccessToken?: string | null,
        spotifyRefreshToken?: string | null,
        soundscapes?:  {
          __typename: "ModelSoundscapeMemberConnection",
          nextToken?: string | null,
        } | null,
        topTrackIds?: Array< string > | null,
        profPicUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SeedTracksByUserIdQueryVariables = {
  userId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSeedTrackFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SeedTracksByUserIdQuery = {
  seedTracksByUserId?:  {
    __typename: "ModelSeedTrackConnection",
    items:  Array< {
      __typename: "SeedTrack",
      key: string,
      spotifyId: string,
      soundscapeId: string,
      userId: string,
      user?:  {
        __typename: "User",
        owner: string,
        spotifyId?: string | null,
        displayName?: string | null,
        spotifyAccessToken?: string | null,
        spotifyRefreshToken?: string | null,
        soundscapes?:  {
          __typename: "ModelSoundscapeMemberConnection",
          nextToken?: string | null,
        } | null,
        topTrackIds?: Array< string > | null,
        profPicUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type SoundscapeMemberBySoundscapeIdQueryVariables = {
  soundscapeId: string,
  userId?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelSoundscapeMemberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type SoundscapeMemberBySoundscapeIdQuery = {
  soundscapeMemberBySoundscapeId?:  {
    __typename: "ModelSoundscapeMemberConnection",
    items:  Array< {
      __typename: "SoundscapeMember",
      userId: string,
      soundscapeId: string,
      user?:  {
        __typename: "User",
        owner: string,
        spotifyId?: string | null,
        displayName?: string | null,
        spotifyAccessToken?: string | null,
        spotifyRefreshToken?: string | null,
        soundscapes?:  {
          __typename: "ModelSoundscapeMemberConnection",
          nextToken?: string | null,
        } | null,
        topTrackIds?: Array< string > | null,
        profPicUrl?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      soundscape?:  {
        __typename: "Soundscape",
        id: string,
        name: string,
        members?:  {
          __typename: "ModelSoundscapeMemberConnection",
          nextToken?: string | null,
        } | null,
        coverTrackUrls: Array< string >,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type UserBySpotifyIdQueryVariables = {
  spotifyId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type UserBySpotifyIdQuery = {
  userBySpotifyId?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      owner: string,
      spotifyId?: string | null,
      displayName?: string | null,
      spotifyAccessToken?: string | null,
      spotifyRefreshToken?: string | null,
      soundscapes?:  {
        __typename: "ModelSoundscapeMemberConnection",
        items:  Array< {
          __typename: "SoundscapeMember",
          userId: string,
          soundscapeId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      topTrackIds?: Array< string > | null,
      profPicUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSeedTrackSubscriptionVariables = {
  filter?: ModelSubscriptionSeedTrackFilterInput | null,
};

export type OnCreateSeedTrackSubscription = {
  onCreateSeedTrack?:  {
    __typename: "SeedTrack",
    key: string,
    spotifyId: string,
    soundscapeId: string,
    userId: string,
    user?:  {
      __typename: "User",
      owner: string,
      spotifyId?: string | null,
      displayName?: string | null,
      spotifyAccessToken?: string | null,
      spotifyRefreshToken?: string | null,
      soundscapes?:  {
        __typename: "ModelSoundscapeMemberConnection",
        items:  Array< {
          __typename: "SoundscapeMember",
          userId: string,
          soundscapeId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      topTrackIds?: Array< string > | null,
      profPicUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSeedTrackSubscriptionVariables = {
  filter?: ModelSubscriptionSeedTrackFilterInput | null,
};

export type OnUpdateSeedTrackSubscription = {
  onUpdateSeedTrack?:  {
    __typename: "SeedTrack",
    key: string,
    spotifyId: string,
    soundscapeId: string,
    userId: string,
    user?:  {
      __typename: "User",
      owner: string,
      spotifyId?: string | null,
      displayName?: string | null,
      spotifyAccessToken?: string | null,
      spotifyRefreshToken?: string | null,
      soundscapes?:  {
        __typename: "ModelSoundscapeMemberConnection",
        items:  Array< {
          __typename: "SoundscapeMember",
          userId: string,
          soundscapeId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      topTrackIds?: Array< string > | null,
      profPicUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSeedTrackSubscriptionVariables = {
  filter?: ModelSubscriptionSeedTrackFilterInput | null,
};

export type OnDeleteSeedTrackSubscription = {
  onDeleteSeedTrack?:  {
    __typename: "SeedTrack",
    key: string,
    spotifyId: string,
    soundscapeId: string,
    userId: string,
    user?:  {
      __typename: "User",
      owner: string,
      spotifyId?: string | null,
      displayName?: string | null,
      spotifyAccessToken?: string | null,
      spotifyRefreshToken?: string | null,
      soundscapes?:  {
        __typename: "ModelSoundscapeMemberConnection",
        items:  Array< {
          __typename: "SoundscapeMember",
          userId: string,
          soundscapeId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      topTrackIds?: Array< string > | null,
      profPicUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSoundscapeMemberSubscriptionVariables = {
  filter?: ModelSubscriptionSoundscapeMemberFilterInput | null,
};

export type OnCreateSoundscapeMemberSubscription = {
  onCreateSoundscapeMember?:  {
    __typename: "SoundscapeMember",
    userId: string,
    soundscapeId: string,
    user?:  {
      __typename: "User",
      owner: string,
      spotifyId?: string | null,
      displayName?: string | null,
      spotifyAccessToken?: string | null,
      spotifyRefreshToken?: string | null,
      soundscapes?:  {
        __typename: "ModelSoundscapeMemberConnection",
        items:  Array< {
          __typename: "SoundscapeMember",
          userId: string,
          soundscapeId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      topTrackIds?: Array< string > | null,
      profPicUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    soundscape?:  {
      __typename: "Soundscape",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelSoundscapeMemberConnection",
        items:  Array< {
          __typename: "SoundscapeMember",
          userId: string,
          soundscapeId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      coverTrackUrls: Array< string >,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSoundscapeMemberSubscriptionVariables = {
  filter?: ModelSubscriptionSoundscapeMemberFilterInput | null,
};

export type OnUpdateSoundscapeMemberSubscription = {
  onUpdateSoundscapeMember?:  {
    __typename: "SoundscapeMember",
    userId: string,
    soundscapeId: string,
    user?:  {
      __typename: "User",
      owner: string,
      spotifyId?: string | null,
      displayName?: string | null,
      spotifyAccessToken?: string | null,
      spotifyRefreshToken?: string | null,
      soundscapes?:  {
        __typename: "ModelSoundscapeMemberConnection",
        items:  Array< {
          __typename: "SoundscapeMember",
          userId: string,
          soundscapeId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      topTrackIds?: Array< string > | null,
      profPicUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    soundscape?:  {
      __typename: "Soundscape",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelSoundscapeMemberConnection",
        items:  Array< {
          __typename: "SoundscapeMember",
          userId: string,
          soundscapeId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      coverTrackUrls: Array< string >,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSoundscapeMemberSubscriptionVariables = {
  filter?: ModelSubscriptionSoundscapeMemberFilterInput | null,
};

export type OnDeleteSoundscapeMemberSubscription = {
  onDeleteSoundscapeMember?:  {
    __typename: "SoundscapeMember",
    userId: string,
    soundscapeId: string,
    user?:  {
      __typename: "User",
      owner: string,
      spotifyId?: string | null,
      displayName?: string | null,
      spotifyAccessToken?: string | null,
      spotifyRefreshToken?: string | null,
      soundscapes?:  {
        __typename: "ModelSoundscapeMemberConnection",
        items:  Array< {
          __typename: "SoundscapeMember",
          userId: string,
          soundscapeId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      topTrackIds?: Array< string > | null,
      profPicUrl?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    soundscape?:  {
      __typename: "Soundscape",
      id: string,
      name: string,
      members?:  {
        __typename: "ModelSoundscapeMemberConnection",
        items:  Array< {
          __typename: "SoundscapeMember",
          userId: string,
          soundscapeId: string,
          createdAt: string,
          updatedAt: string,
        } | null >,
        nextToken?: string | null,
      } | null,
      coverTrackUrls: Array< string >,
      createdAt: string,
      updatedAt: string,
    } | null,
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
    members?:  {
      __typename: "ModelSoundscapeMemberConnection",
      items:  Array< {
        __typename: "SoundscapeMember",
        userId: string,
        soundscapeId: string,
        user?:  {
          __typename: "User",
          owner: string,
          spotifyId?: string | null,
          displayName?: string | null,
          spotifyAccessToken?: string | null,
          spotifyRefreshToken?: string | null,
          topTrackIds?: Array< string > | null,
          profPicUrl?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        soundscape?:  {
          __typename: "Soundscape",
          id: string,
          name: string,
          coverTrackUrls: Array< string >,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    coverTrackUrls: Array< string >,
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
    members?:  {
      __typename: "ModelSoundscapeMemberConnection",
      items:  Array< {
        __typename: "SoundscapeMember",
        userId: string,
        soundscapeId: string,
        user?:  {
          __typename: "User",
          owner: string,
          spotifyId?: string | null,
          displayName?: string | null,
          spotifyAccessToken?: string | null,
          spotifyRefreshToken?: string | null,
          topTrackIds?: Array< string > | null,
          profPicUrl?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        soundscape?:  {
          __typename: "Soundscape",
          id: string,
          name: string,
          coverTrackUrls: Array< string >,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    coverTrackUrls: Array< string >,
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
    members?:  {
      __typename: "ModelSoundscapeMemberConnection",
      items:  Array< {
        __typename: "SoundscapeMember",
        userId: string,
        soundscapeId: string,
        user?:  {
          __typename: "User",
          owner: string,
          spotifyId?: string | null,
          displayName?: string | null,
          spotifyAccessToken?: string | null,
          spotifyRefreshToken?: string | null,
          topTrackIds?: Array< string > | null,
          profPicUrl?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        soundscape?:  {
          __typename: "Soundscape",
          id: string,
          name: string,
          coverTrackUrls: Array< string >,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    coverTrackUrls: Array< string >,
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
    owner: string,
    spotifyId?: string | null,
    displayName?: string | null,
    spotifyAccessToken?: string | null,
    spotifyRefreshToken?: string | null,
    soundscapes?:  {
      __typename: "ModelSoundscapeMemberConnection",
      items:  Array< {
        __typename: "SoundscapeMember",
        userId: string,
        soundscapeId: string,
        user?:  {
          __typename: "User",
          owner: string,
          spotifyId?: string | null,
          displayName?: string | null,
          spotifyAccessToken?: string | null,
          spotifyRefreshToken?: string | null,
          topTrackIds?: Array< string > | null,
          profPicUrl?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        soundscape?:  {
          __typename: "Soundscape",
          id: string,
          name: string,
          coverTrackUrls: Array< string >,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    topTrackIds?: Array< string > | null,
    profPicUrl?: string | null,
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
    owner: string,
    spotifyId?: string | null,
    displayName?: string | null,
    spotifyAccessToken?: string | null,
    spotifyRefreshToken?: string | null,
    soundscapes?:  {
      __typename: "ModelSoundscapeMemberConnection",
      items:  Array< {
        __typename: "SoundscapeMember",
        userId: string,
        soundscapeId: string,
        user?:  {
          __typename: "User",
          owner: string,
          spotifyId?: string | null,
          displayName?: string | null,
          spotifyAccessToken?: string | null,
          spotifyRefreshToken?: string | null,
          topTrackIds?: Array< string > | null,
          profPicUrl?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        soundscape?:  {
          __typename: "Soundscape",
          id: string,
          name: string,
          coverTrackUrls: Array< string >,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    topTrackIds?: Array< string > | null,
    profPicUrl?: string | null,
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
    owner: string,
    spotifyId?: string | null,
    displayName?: string | null,
    spotifyAccessToken?: string | null,
    spotifyRefreshToken?: string | null,
    soundscapes?:  {
      __typename: "ModelSoundscapeMemberConnection",
      items:  Array< {
        __typename: "SoundscapeMember",
        userId: string,
        soundscapeId: string,
        user?:  {
          __typename: "User",
          owner: string,
          spotifyId?: string | null,
          displayName?: string | null,
          spotifyAccessToken?: string | null,
          spotifyRefreshToken?: string | null,
          topTrackIds?: Array< string > | null,
          profPicUrl?: string | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        soundscape?:  {
          __typename: "Soundscape",
          id: string,
          name: string,
          coverTrackUrls: Array< string >,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    topTrackIds?: Array< string > | null,
    profPicUrl?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
