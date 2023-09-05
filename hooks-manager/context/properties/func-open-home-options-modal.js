export default function funcOpenHomeOptionsModal({
    setState,
    useCallback,
  }) {
    return useCallback(() => {
        setState('homeOptionsModalOpen', true);
    }, [setState]);
  }
  