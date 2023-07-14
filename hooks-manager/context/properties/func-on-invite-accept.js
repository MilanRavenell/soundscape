export default function funcOnInviteAccept({
    useCallback,
    promptSpotifyLoginAsync,
  }) {
    return useCallback(() => {
      promptSpotifyLoginAsync();
    }, [promptSpotifyLoginAsync]);
  }
  