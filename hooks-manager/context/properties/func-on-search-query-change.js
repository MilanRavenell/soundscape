import funcGenTracks from '../../shared/gen-tracks';

export default function funcOnSearchQueryChange({
  setState,
  useCallback,
}) {
  return useCallback((newQuery) => {
    setState('searchQuery', newQuery);
  }, [setState]);
}
