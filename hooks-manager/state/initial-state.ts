const initialState = {
  spotifyAccessToken: null,
  searchedTracks: [],
  selectedTracks: [],
  generatedTracks: [],
  curPlayingTrack: null,
  isPaused: true,
  playerToggle: false,
  accessTokenValid: null,
  activated: false,
  screen: 'player',
  optionsModalOpen: false,
  seedSongsModalOpen: false,
  addSeedSongsModalOpen: false,
  membersModalOpen: false,
  selectedSoundscapeIndex: null,
  soundscapes: [],
  loginDialogOpen: false,
  user: null,
  searchQuery: '',
};

export default initialState;
