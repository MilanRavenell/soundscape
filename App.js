import { useReducer, useEffect, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import queryString from 'query-string';
import * as WebBrowser from 'expo-web-browser';
import { ResponseType, useAuthRequest } from 'expo-auth-session';
import {
  Provider,
} from "@react-native-material/core";
import { initState } from './hooks-manager/state';
import { getContext } from './hooks-manager/context';
import { loadEffects } from './hooks-manager/effects';
import {
  AddSeedSongsModal,
  LoginDialog,
  MembersModal,
  OptionsModal,
  SeedSongsModal,
  SoundscapeSelectionView,
  SoundscapeView,
} from './components';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export default function App() {
  const parsedUrl = queryString.parseUrl(window.location.href);
  console.log(parsedUrl);
  const domain = parsedUrl.url.slice(0, -1);

  const [spotifyAuthRequest, spotifyAuthResponse, promptSpotifyLoginAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: '43bfe982f35949b793aa78aac13b784b',
      scopes: [
        'user-read-private user-read-email',
        'app-remote-control',
        'user-modify-playback-state',
        'user-read-playback-state',
        'user-top-read',
      ],
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri: domain
    },
    discovery,
  );

  const [state, setState] = initState(useReducer, useCallback);
  const context = getContext({
    state,
    setState,
    spotifyAuthResponse,
    useCallback,
    promptSpotifyLoginAsync,
  });

  loadEffects({
    context,
    state,
    setState,
    spotifyAuthResponse,
    useEffect,
    promptSpotifyLoginAsync,
  });

  const selectedSoundscape = context.selectedSoundscape;

  return (
    <Provider>
      <View style={styles.container}>
        {(selectedSoundscape === null)
          ? <SoundscapeSelectionView
            soundscapes={context.state.soundscapes}
            onSoundscapePress={(index) => setState('selectedSoundscapeIndex', index)}
            onNewSoundscapePress={context.funcCreateNewSoundscape}
          />
          : <SoundscapeView
            soundscape={selectedSoundscape}
            playerIsPaused={context.state.isPaused}
            isActive={context.state.activated}
            onPlayPressed={context.funcOnPlayPressed}
            onNextPressed={context.funcOnNextPressed}
            onOptionsPress={context.funcOpenOptionsModal}
            onMembersPressed={context.funcOpenMembersModal}
            onBackPressed={context.funcDeselectSoundscape}
            onSongPressed={context.funcOnQueuedSongPressed}
            onRegeneratePressed={context.funcRegenerateSongs}
          />}
        {context.state.optionsModalOpen && (
          <OptionsModal
            closeModal={context.funcCloseModal}
            onSeedSongsPressed={context.funcOpenSeedSongsModal}
            onLeaveSoundscapePressed={context.funcDeleteSoundscape}
          />
        )}
        {context.state.seedSongsModalOpen && (
          <SeedSongsModal
            closeModal={context.funcCloseModal}
            seedSongs={selectedSoundscape.seedTracks}
            user={context.state.user}
            onAddSongsPressed={context.funcOpenAddSeedSongsModal}
            onRemoveSongPressed={context.funcRemoveSeedSong}
          />
        )}
        {context.state.addSeedSongsModalOpen && (
          <AddSeedSongsModal
            closeModal={context.funcCloseModal}
            searchSongs={context.state.searchedTracks}
            seedSongs={selectedSoundscape.seedTracks}
            query={context.state.searchQuery}
            onSongPressed={context.funcAddSeedSong}
            onDonePressed={context.funcOpenSeedSongsModal}
            onTextFieldChange={context.funcOnSearchQueryChange}
          />
        )}
        {context.state.membersModalOpen && (
          <MembersModal
            closeModal={context.funcCloseModal}
            members={selectedSoundscape.members}
            onDonePressed={()=>{}}
          />
        )}
        <LoginDialog
          visible={context.state.loginDialogOpen}
          onDismiss={context.funcCloseLoginDialog}
          onConfirm={context.funcOnLoginDialogConfirmation}
        />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100dvh',
    overflow: 'hidden',
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
  },
});
