import axios from 'axios';

export default function searchSpotifyTracks({
  state,
  useEffect,
  setState,
}) {
  const searchQuery = state.searchQuery;
  const spotifyAccessToken = state.spotifyAccessToken;

    useEffect(() => {
      (async () => {
        console.log('query: ', searchQuery);
  
        if (searchQuery === '' || !spotifyAccessToken) {
          return;
        }
  
        const response = (await axios.get(
          `https://api.spotify.com/v1/search?q=${searchQuery}&type=track`,
          {
            headers: {
              Authorization: `Bearer ${spotifyAccessToken}`,
            }
          }
        )).data;
        console.log('query response: ', response)
        setState('searchedTracks', response.tracks.items);
      })();
    }, [searchQuery, spotifyAccessToken]);
}
