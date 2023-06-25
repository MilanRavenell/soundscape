import axios from 'axios';
import { updateSelectedSoundscape } from '../../shared';

// Every 500 milliseconds, get playback state
export default function getPlaybackState({
  context,
  state,
  router,
  useEffect,
  setState,
}) {
  const spotifyAccessToken = state.spotifyAccessToken;
  const activated = state.activated;
  const soundscapes = state.soundscapes;
  const selectedSoundscapeIndex = state.selectedSoundscapeIndex;
  const selectedSoundscape = state.soundscapes[selectedSoundscapeIndex];
  const playerToggle = state.playerToggle;

  useEffect(() => {
    (async () => {
      if (!spotifyAccessToken || !activated || selectedSoundscapeIndex === null) {
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

      if (player?.item && player?.is_playing) {
        setState('curPlayingTrack', player.item);
        const curQueueSongIds = selectedSoundscape.queueSongs.map((track) => track.id);

        // if the current song is in the up next playlist, remove it and replace it
        const curSongIndex = curQueueSongIds.indexOf(player?.item?.id);
        const curTracks = [];

        console.log('song index: ', curSongIndex);

        // New song is not currently in the queue, add it
        if (curSongIndex === -1) {
          curTracks.push(...[
            player.item,
            ...selectedSoundscape.queueSongs,
          ]);

          // playTracks(curTracks, player.progress_ms);
          updateSelectedSoundscape(
            soundscapes,
            selectedSoundscapeIndex,
            {
              queueSongs: curTracks,
            },
            setState,
          );
        // New song is one of the songs currently in the queue, skip to that song and generate more
        } else if (curSongIndex !== 0) {
          // const newTracks = await genTracks(selectedSoundscape, curSongIndex);

          // add newly generated songs to spotify queue
          // for (const track of newTracks) {
          //   await addToQueue(track);
          // };

          curTracks.push(...[
            ...selectedSoundscape.queueSongs.slice(curSongIndex),
          ]);

          // const offset = parseInt(performance.now() - start);
          // console.log('offset: ', offset);
          // playTracks(curTracks, player.progress_ms + offset);
          updateSelectedSoundscape(
            soundscapes,
            selectedSoundscapeIndex,
            {
              queueSongs: curTracks,
            },
            setState,
          );
        }
      }

      if (player && player?.repeat_state !== 'off') {
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

      setState('isPaused', !player.is_playing);

      await new Promise(r => setTimeout(r, 100));
      setState('playerToggle', !playerToggle);
    })();
  }, [playerToggle, spotifyAccessToken, activated, selectedSoundscapeIndex]);
}
