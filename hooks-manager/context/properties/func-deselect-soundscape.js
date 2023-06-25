export default function funcDeselectSoundscape({
  setState,
  useCallback,
}) {
  return useCallback(() => {
    setState('selectedSoundscapeIndex', null)
  }, [setState]);
}
