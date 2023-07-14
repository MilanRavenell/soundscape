import axios from 'axios';
import queryString from 'query-string';

export default function handleAccessTokenFromInvite({
    context,
    state,
    useEffect,
    setState,
    spotifyAuthResponse,
  }) {
    const parsedUrl = queryString.parseUrl(window.location.href);
    const spotifyAccessToken = state.spotifyAccessToken;
    const inviteUser = state.inviteUser;
    const inviteSoundscape = state.inviteSoundscape;
    const user = state.user;

    console.log('8: ', inviteSoundscape, user)

    useEffect(() => {
        (async () => {
            if (!spotifyAccessToken || !user || !parsedUrl.url.includes('/invite')) {
                return;
            }
    
            try {
                await context.api.createSoundscapeMember({
                    userId: user.owner,
                    soundscapeId: inviteSoundscape.id,
                });
            } catch (err) {

            }

            setState('inviteSuccess', true);
            window.location.href = 'https://soundscape3.vercel.app/'
        })()
    }, [
        inviteSoundscape,
        inviteUser,
        spotifyAccessToken,
        spotifyAuthResponse
    ]);
  }
  