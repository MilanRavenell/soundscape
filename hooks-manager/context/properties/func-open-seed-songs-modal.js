export default function funcOpenSeedSongsModal({
  setState,
  useCallback,
}) {
  return useCallback(() => {
    setState('seedSongsModalOpen', true);
    setState('optionsModalOpen', false);
    setState('addSeedSongsModalOpen', false);
    setState('membersModalOpen', false);
  }, [setState]);
}
