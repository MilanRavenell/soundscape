export default function funcOpenAddSeedSongsModal({
  setState,
  useCallback,
}) {
  return useCallback(() => {
    setState('addSeedSongsModalOpen', true);
    setState('optionsModalOpen', false);
    setState('seedSongsModalOpen', false);
    setState('membersModalOpen', false);
  }, [setState]);
}
