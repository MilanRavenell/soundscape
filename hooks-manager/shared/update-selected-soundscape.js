export default function updateSelectedSoundscape(
  soundscapes,
  selectedSoundscapeIndex,
  newValues,
  setState,
) {
  const newSoundscapes = [...soundscapes];
  newSoundscapes[selectedSoundscapeIndex] = {
    ...newSoundscapes[selectedSoundscapeIndex],
    ...newValues,
  }

  setState('soundscapes', newSoundscapes);
}
