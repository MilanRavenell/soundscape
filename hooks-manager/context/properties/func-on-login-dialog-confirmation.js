export default function funcOnLoginDialogConfirmation({
  useCallback,
  promptSpotifyLoginAsync,
}) {
  return useCallback(() => {
    promptSpotifyLoginAsync();
  }, [promptSpotifyLoginAsync]);
}
