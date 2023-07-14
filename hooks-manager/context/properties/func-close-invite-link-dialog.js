export default function funcCloseInviteLinkDialog({
    setState,
    useCallback,
  }) {
    return useCallback(() => {
      setState('inviteLinkDialogOpen', false);
    }, [setState]);
  }
  