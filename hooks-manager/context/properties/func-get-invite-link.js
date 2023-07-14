import { getInviteLink } from '../../shared';

export default function funcGetInviteLink({
    state,
    setState,
    useCallback,
  }) {
    const soundscapes = state.soundscapes;
    const selectedSoundscapeIndex = state.selectedSoundscapeIndex;
    const selectedSoundscape = (soundscapes && selectedSoundscapeIndex)
        ? soundscapes[selectedSoundscapeIndex]
        : null;
    const user = state.user;
    
    return useCallback(() => {
        if (!selectedSoundscape || !user) {
            return ''
        }
        
        return getInviteLink(selectedSoundscape.id, user.id);
    }, [selectedSoundscape, user, setState]);
  }
  