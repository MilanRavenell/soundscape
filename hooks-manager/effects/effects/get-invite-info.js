import queryString from 'query-string';

export default function getInviteInfo({
    context,
    useEffect,
    setState,
    spotifyAuthResponse,
  }) {
    const parsedUrl = queryString.parseUrl(window.location.href);
    console.log(parsedUrl);
    const domain = parsedUrl.url.slice(0, -1);
    const { inviterId, soundscapeId } = parsedUrl.query;

    useEffect(() => {
        (async () => {
            if (!parsedUrl.url.includes('/invite')) {
                return;
            }
    
            const [inviteUser, inviteSoundscape] = await Promise.all([
                context.api.getUser(inviterId),
                context.api.getSoundscape(soundscapeId),
            ]);

            if (!inviteUser || !inviteSoundscape) {
                setState('inviteError', true);
            }

            inviteSoundscape.members = inviteSoundscape.members
                .items
                .map((member) => member.user)

            setState('inviteUser', inviteUser);
            setState('inviteSoundscape', inviteSoundscape);
        })()
    }, [spotifyAuthResponse]);
  }
  