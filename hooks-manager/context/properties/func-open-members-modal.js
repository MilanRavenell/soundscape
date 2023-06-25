export default function funcOpenMembersModal({
  setState,
  useCallback,
}) {
  return useCallback(() => {
    setState('membersModalOpen', true);
    setState('addSeedSongsModalOpen', false);
    setState('optionsModalOpen', false);
    setState('seedSongsModalOpen', false);
  }, [setState]);
}
