export default function funcOpenInviteLinkDialog({
    setState,
    useCallback,
  }) {
    return useCallback(() => {
        setState('inviteLinkDialogOpen', true);
    }, [setState]);
  }
  