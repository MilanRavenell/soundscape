export default function selectedSoundscape({
    state,
  }) {
    const soundscapes = state.soundscapes;
    const selectedSoundscapeIndex = state.selectedSoundscapeIndex;
    return selectedSoundscapeIndex !== null
        ? soundscapes[selectedSoundscapeIndex]
        : null
  }
  