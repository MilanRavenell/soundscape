export default function funcCloseModal({
  setState,
  useCallback,
}) {
  return useCallback(() => {
    setState('seedSongsModalOpen', false);
    setState('optionsModalOpen', false);
    setState('addSeedSongsModalOpen', false);
    setState('membersModalOpen', false);
  }, [setState]);
}
