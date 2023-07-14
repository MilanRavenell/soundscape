export default function funcOpenEditSoundcapeNameDialog({
    setState,
    useCallback,
  }) {
    return useCallback(() => {
        setState('editSoundscapeNameDialogOpen', true);
    }, [setState]);
  }
  