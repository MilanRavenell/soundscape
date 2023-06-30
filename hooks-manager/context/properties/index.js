import api from './api';
import funcAddSeedSong from './func-add-seed-song';
import funcAddToQueue from './func-add-to-queue';
import funcCloseLoginDialog from './func-close-login-dialog';
import funcCloseModal from './func-close-modal';
import funcCreateNewSoundscape from './func-create-new-soundscape';
import funcDeleteSoundscape from './func-delete-soundscape';
import funcDeselectSoundscape from './func-deselect-soundscape';
import funcOnLoginDialogConfirmation from './func-on-login-dialog-confirmation';
import funcOnNextPressed from './func-on-next-pressed';
import funcOnPlayPressed from './func-on-play-pressed';
import funcOnQueuedSongPressed from './func-on-queued-song-pressed';
import funcOnSearchQueryChange from './func-on-search-query-change';
import funcOpenAddSeedSongsModal from './func-open-add-seed-songs-modal';
import funcOpenMembersModal from './func-open-members-modal';
import funcOpenOptionsModal from './func-open-options-modal';
import funcOpenSeedSongsModal from './func-open-seed-songs-modal';
import funcRegenerateSongs from './func-regenerate-songs';
import selectedSoundscape from './selected-soundscape';
import state from './state';

const properties = {
  api,
  funcAddSeedSong,
  funcAddToQueue,
  funcCloseLoginDialog,
  funcCloseModal,
  funcCreateNewSoundscape,
  funcDeleteSoundscape,
  funcDeselectSoundscape,
  funcOnLoginDialogConfirmation,
  funcOnNextPressed,
  funcOnPlayPressed,
  funcOnQueuedSongPressed,
  funcOnSearchQueryChange,
  funcOpenAddSeedSongsModal,
  funcOpenMembersModal,
  funcOpenOptionsModal,
  funcOpenSeedSongsModal,
  funcRegenerateSongs,
  selectedSoundscape,
  state,
};

export default properties;
