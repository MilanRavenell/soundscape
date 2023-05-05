import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import queryString from 'query-string';
import axios from 'axios';
import theAlgorithm from './alogrithm';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, ResponseType, useAuthRequest } from 'expo-auth-session';
import { Player } from './components'; 

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: 'https://accounts.spotify.com/authorize',
  tokenEndpoint: 'https://accounts.spotify.com/api/token',
};

export default function App() {
  const [spotifyAccessToken, setSpotifyAccessToken] = useState(null);
  const [textfieldValue, setTextfieldValue] = useState('');
  const [searchedTracks, setSearchedTracks] = useState([]);
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [generatedTracks, setGeneratedTracks] = useState([]);
  const [curPlayingTrack, setCurPlayingTrack] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  const [playerToggle, setPlayerToggle] = useState(false);
  const [accessTokenValid, setAccessTokenValid] = useState(null);
  const [activated, setActivated] = useState(false);

  const parsedUrl = queryString.parseUrl(window.location.href);
  console.log(parsedUrl);
  const domain = parsedUrl.url.slice(0, -1);

  console.log('dom: ', domain)
  const queryParams = parsedUrl.query;

  const [spotifyAuthRequest, spotifyAuthResponse, promptSpotifyLoginAsync] = useAuthRequest(
    {
      responseType: ResponseType.Token,
      clientId: '43bfe982f35949b793aa78aac13b784b',
      scopes: [
        'user-read-private user-read-email',
        'app-remote-control',
        'user-modify-playback-state',
        'user-read-playback-state',
      ],
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri: domain
    },
    discovery,
  );

  useEffect(() => {
    if (spotifyAuthResponse?.type === 'success') {
      const { access_token } = spotifyAuthResponse.params;
      setSpotifyAccessToken(access_token);
    }
  }, [spotifyAuthResponse]);

  const addSelectedTrack = (track) => {
    const curTracks = [...selectedTracks];
    curTracks.push(track);
    setSelectedTracks(curTracks);
  };

  const removeSelectedTrack = (index) => {
    const curTracks = [...selectedTracks];
    curTracks.splice(index, 1);
    setSelectedTracks(curTracks);
  }

  const play = async (tracks) => {
    if (!spotifyAccessToken) {
      return;
    }

    console.log(tracks)
    await axios.put(
      'https://api.spotify.com/v1/me/player/play',
      tracks ? { uris: tracks } : {},
      {
        headers: {
          Authorization: `Bearer ${spotifyAccessToken}`,
        }
      }
    )
  };

  const pause = async () => {
    if (!spotifyAccessToken) {
      return;
    }

    await axios.put(
      'https://api.spotify.com/v1/me/player/pause',
      {},
      {
        headers: {
          Authorization: `Bearer ${spotifyAccessToken}`,
        }
      }
    )
  }

  // Every 500 milliseconds, get playback state
  useEffect(() => {
    (async () => {
      if (!activated || !curPlayingTrack || !spotifyAccessToken) {
        return;
      }

      const player = (await axios.get(
        'https://api.spotify.com/v1/me/player',
        {
          headers: {
            Authorization: `Bearer ${spotifyAccessToken}`,
          }
        },
      )).data;

      console.log('bruh: ', player);

      if (player.item) {
        setCurPlayingTrack(player.item);
        const genSongsIds = generatedTracks.map((track) => track.id);

        // if the current song is in the up next playlist, remove it
        const cursongIndex = genSongsIds.indexOf(player?.item?.id);
        if (cursongIndex !== -1) {
          const genTracksCopy = [...generatedTracks];
          genTracksCopy.splice(cursongIndex, 1);
          setGeneratedTracks(genTracksCopy);
        }
      }

      if (player.repeat_state !== 'off') {
        await axios.put(
          'https://api.spotify.com/v1/me/player/repeat?state=off',
          {},
          {
            headers: {
              Authorization: `Bearer ${spotifyAccessToken}`,
            }
          }
        )
      }

      setIsPaused(!player.is_playing);

      await new Promise(r => setTimeout(r, 500));
      setPlayerToggle(!playerToggle);
    })();
  }, [playerToggle, curPlayingTrack, activated, generatedTracks, spotifyAccessToken])

  const onPlayClick = async () => {
    if (generatedTracks.length === 0) {
      return;
    }

    if (!curPlayingTrack) {
      const curTracks = [...generatedTracks];
      const curTrack = curTracks.shift();
      setCurPlayingTrack(curTrack);
      setGeneratedTracks(curTracks);
      await play(generatedTracks.map((track) => `spotify:track:${track.id}`));
      setIsPaused(false);
      setActivated(true);
      return;
    }

    isPaused ? play() : pause();
  }

  const onNextClick = () => {
    if (generatedTracks.length === 0) {
      return;
    }

    const curTracks = [...generatedTracks];
    const curTrack = curTracks.shift();
    setCurPlayingTrack(curTrack);
    setGeneratedTracks(curTracks);
    setIsPaused(false);
    play(generatedTracks.map((track) => `spotify:track:${track.id}`));
  }

  // On boot, check if spotify access token is valid
  useEffect(() => {
    return
    (async () => {
      console.log('testing access token...')
      try {
        await axios.get(
          'https://api.spotify.com/v1/me',
          {
            headers: {
              Authorization: `Bearer ${spotifyAccessToken}`,
            }
          },
        );

        setAccessTokenValid(true);
      } catch (err) {
        console.log(err)
        if (err?.response?.status === 401) {
          setAccessTokenValid(false);
        }
      }
    })()
  }, [spotifyAccessToken]);

  useEffect(() => {
    (async () => {
      if (!spotifyAccessToken) {
        return;
      }

      const gen = await theAlgorithm(selectedTracks, spotifyAccessToken)
      setGeneratedTracks(gen);
    })();
  }, [spotifyAccessToken, selectedTracks])

  useEffect(() => {
    (async () => {
      console.log(textfieldValue);

      if (textfieldValue === '' || !spotifyAccessToken) {
        return;
      }

      const response = (await axios.get(
        `https://api.spotify.com/v1/search?q=${textfieldValue}&type=track`,
        {
          headers: {
            Authorization: `Bearer ${spotifyAccessToken}`,
          }
        }
      )).data;
      setSearchedTracks(response.tracks.items);
    })();
  }, [textfieldValue, spotifyAccessToken]);

  return (
    <View style={{ width: '100%', height: '100%' }}>
      <Player/>
    </View>
  )

  if (accessTokenValid === null) {
    return (
      <View style={styles.container}>
        <Text>hi</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {!accessTokenValid && (
        <View>
          <Button
            title={'get spotify access token'}
            style={{ marginRight: '10px' }}
            onPress={promptSpotifyLoginAsync}
          />
        </View>
      )}
      <View style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <Text style={{ flex: 1 }}>{'Now Playing: ' + (curPlayingTrack ? `${curPlayingTrack?.name} - ${curPlayingTrack?.artists[0].name}` : '')}</Text>
        <Button
          title={isPaused ? (activated ? 'play': 'start') : 'paused'}
          style={{ marginRight: '10px' }}
          onPress={onPlayClick}
          disabled={!accessTokenValid}
        />
        <Button
          title={'next'}
          onPress={onNextClick}
          disabled={!accessTokenValid || !activated}
        />
      </View>
      <View style={{ display: 'flex', width: '100%', flexDirection: 'row', padding: '10px', flex: 1 }}>
        <View style={{ width: '33%', overflow: 'hidden', padding: '10px' }}>
          <View style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
            <Text style={{marginRight: '10px' }}>Search:</Text>
            <TextInput
              onChangeText={setTextfieldValue}
              value={textfieldValue}
              style={{ border: '1px solid black', flex: 1 }}
              editable={accessTokenValid}
            />
          </View>
          {searchedTracks.map((track, index) => (
            <Button
              onPress={() => addSelectedTrack(track)}
              title={`${track.name}-${track.artists[0].name}`}
              key={index}
            />
          ))}
        </View>
        <View style={{ width: '33%', overflow: 'hidden', padding: '10px' }}>
            <Text style={{ marginBottom: '20px' }}>Selected Songs</Text>
            {selectedTracks.map((track, index) => (
              <Button
                onPress={() => removeSelectedTrack(index)}
                title={`${track.name}-${track.artists[0].name}`}
                key={index}
              />
            ))}
        </View>
        <View style={{ width: '33%', overflow: 'hidden', padding: '10px' }}>
            <Text>Generated Playlist</Text>
            {generatedTracks.map((track, index) => (
              <Text style={{ border: '1px solid black', margin: '5px' }} key={index}>
                {`${track.name}-${track.artists[0].name}`}
              </Text>
            ))}
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  },
});
