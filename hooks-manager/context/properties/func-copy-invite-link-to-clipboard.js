import { getInviteLink } from '../../shared';

export default function funcCopyInviteLinkToClipboard({
    useCallback,
  }) {
    return useCallback((inviteLink) => {
        navigator.clipboard.writeText(inviteLink);
    }, []);
  }
  