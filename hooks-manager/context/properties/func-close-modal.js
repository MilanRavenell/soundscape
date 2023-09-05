export default function funcCloseModal({
  setState,
  useCallback,
}) {
  return useCallback(() => {
    setState('seedSongsModalOpen', false);
    setState('soundscapeOptionsModalOpen', false);
    setState('addSeedSongsModalOpen', false);
    setState('membersModalOpen', false);
    setState('homeOptionsModalOpen', false);
  }, [setState]);
}
