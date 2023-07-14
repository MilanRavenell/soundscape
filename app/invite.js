import { useReducer, useEffect, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import queryString from 'query-string';
import * as WebBrowser from 'expo-web-browser';
import { ResponseType, useAuthRequest } from 'expo-auth-session';
import {
  Provider,
} from "@react-native-material/core";
import { initState } from '../hooks-manager/state';
import { getContext } from '../hooks-manager/context';
import { loadEffects } from '../hooks-manager/effects';
import {
  InviteView,
} from '../components';
import { Amplify } from 'aws-amplify';
import config from '../aws-exports';

Amplify.configure(config);

WebBrowser.maybeCompleteAuthSession();

const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export default function Invite() {
  const parsedUrl = queryString.parseUrl(window.location.href);
  console.log(parsedUrl);
  const domain = parsedUrl.url.at(-1) === '/' ? parsedUrl.url.slice(0, -1) : parsedUrl.url;

    const [spotifyAuthRequest, spotifyAuthResponse, promptSpotifyLoginAsync] = useAuthRequest(
        {
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
        domain,
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

    return (
        <Provider>
            <View style={styles.container}>
                <InviteView
                    inviteError={state.inviteError}
                    inviteSoundscape={state.inviteSoundscape}
                    inviteSuccess={state.inviteSuccess}
                    inviteUser={state.inviteUser}
                    onAcceptPressed={context.funcOnInviteAccept}
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
    padding: 10,
  },
});
