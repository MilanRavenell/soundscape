export default function funcOpenOptionsModal({
  setState,
  useCallback,
}) {
  return useCallback(() => {
    setState('optionsModalOpen', true);
    setState('seedSongsModalOpen', false);
    setState('addSeedSongsModalOpen', false);
    setState('membersModalOpen', false);
  }, [setState]);
}
