import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import queryString from 'query-string';
import axios from 'axios';
import theAlgorithm from './alogrithm';

const spotifyLogin = () => {
  console.log('hiiii')
  const state = 'hiii';//generateRandomString(16);
  const scope = 'user-read-private user-read-email app-remote-control user-modify-playback-state';

  window.location.href = ('https://accounts.spotify.com/authorize?' +
    queryString.stringify({
      response_type: 'code',
      client_id: '43bfe982f35949b793aa78aac13b784b',
      scope: scope,
      redirect_uri: 'http://localhost:3000/spotify-callback',
      state: state
    }));
}

export default function App() {
  const [textfieldValue, setTextfieldValue] = useState('');
  const [searchedTracks, setSearchedTracks] = useState([]);
  const [selectedTracks, setSelectedTracks] = useState([]);
  const [generatedTracks, setGeneratedTracks] = useState([]);
  const [curPlayingTrack, setCurPlayingTrack] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  const [duration, setDuration] = useState(null);
  const [accessTokenValid, setAccessTokenValid] = useState(null);

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

  const queryParams = queryString.parseUrl(window.location.href).query;

  const accessToken = queryParams.accessToken;

  const play = async (track) => {
    await axios.put(
      'https://api.spotify.com/v1/me/player/play',
      track ? { uris: [`spotify:track:${track.id}`] } : {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      }
    )
  }

  useEffect(() => {
    (async () => {
      console.log('dur: ', duration);
      if (!isPaused) {
        await new Promise(r => setTimeout(r, 1));
        setDuration(duration + 1);

        if (duration >= curPlayingTrack.duration_ms) {
          onNextClick();
        }
      }
    })();
  }, [duration, isPaused, curPlayingTrack])

  const onPlayClick = () => {
    if (generatedTracks.length === 0) {
      return;
    }

    if (!curPlayingTrack) {
      const curTracks = [...generatedTracks];
      const curTrack = curTracks.shift();
      setCurPlayingTrack(curTrack);
      setGeneratedTracks(curTracks);
      play(curTrack);
      setDuration(0);
      setIsPaused(false);
      return;
    }

    play();
    setIsPaused(!isPaused);
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
    setDuration(0);
    play(curTrack);
  }

  // On boot, check if spotify access token is valid
  useEffect(() => {
    (async () => {
      console.log('testing access token...')
      try {
        const response = await axios.get(
          'https://api.spotify.com/v1/me',
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
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
  }, []);

  useEffect(() => {
    if (accessTokenValid === false) {
      spotifyLogin();
    }
  }, [accessTokenValid]);

  useEffect(() => {
    (async () => {
      const gen = await theAlgorithm(selectedTracks, accessToken)
      setGeneratedTracks(gen);
    })();
  }, [accessToken, selectedTracks])

  useEffect(() => {
    (async () => {
      console.log(textfieldValue);

      if (textfieldValue === '') {
        return;
      }

      const response = (await axios.get(
        `https://api.spotify.com/v1/search?q=${textfieldValue}&type=track`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          }
        }
      )).data;
      setSearchedTracks(response.tracks.items);
    })();
  }, [textfieldValue]);

  if (accessTokenValid === null) {
    return (
      <View style={styles.container}>
        <Text>hi</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text>{'Now Playing: ' + (curPlayingTrack ? `${curPlayingTrack?.name} - ${curPlayingTrack?.artists[0].name}` : '')}</Text>
        <Button
          title={isPaused ? 'play' : 'paused'}
          style={{ marginRight: '10px' }}
          onPress={onPlayClick}
          disabled={!accessTokenValid}
        />
        <Button
          title={'next'}
          onPress={onNextClick}
          disabled={!accessTokenValid}
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
