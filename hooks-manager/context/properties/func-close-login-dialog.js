export default function funcCloseLoginDialog({
  setState,
  useCallback,
}) {
  return useCallback(() => {
    setState('loginDialogVisible', false);
  }, []);
}
