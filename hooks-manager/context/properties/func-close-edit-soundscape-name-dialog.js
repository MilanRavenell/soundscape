export default function funcCloseEditSoundcapeNameDialog({
    setState,
    useCallback,
  }) {
    return useCallback(() => {
        setState('editSoundscapeNameDialogOpen', false);
    }, [setState]);
  }
  