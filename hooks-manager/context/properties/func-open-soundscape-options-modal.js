export default function funcOpenSoundscapeOptionsModal({
  setState,
  useCallback,
}) {
  return useCallback(() => {
    setState('soundscapeOptionsModalOpen', true);
    setState('seedSongsModalOpen', false);
    setState('addSeedSongsModalOpen', false);
    setState('membersModalOpen', false);
  }, [setState]);
}
