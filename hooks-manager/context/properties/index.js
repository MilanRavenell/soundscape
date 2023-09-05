import api from './api';
import domain from './domain';
import funcAddSeedSong from './func-add-seed-song';
import funcAddToQueue from './func-add-to-queue';
import funcCloseEditSoundcapeNameDialog from './func-close-edit-soundscape-name-dialog';
import funcCloseInviteLinkDialog from './func-close-invite-link-dialog';
import funcCloseLoginDialog from './func-close-login-dialog';
import funcCloseModal from './func-close-modal';
import funcCopyInviteLinkToClipboard from './func-copy-invite-link-to-clipboard';
import funcCreateNewSoundscape from './func-create-new-soundscape';
import funcDeleteSoundscape from './func-delete-soundscape';
import funcDeleteUser from './func-delete-user';
import funcDeselectSoundscape from './func-deselect-soundscape';
import funcGetInviteLink from './func-get-invite-link';
import funcOnEditSoundscapeNameConfirm from './func-on-edit-soundscape-name-confirm';
import funcOnInviteAccept from './func-on-invite-accept';
import funcOnLoginDialogConfirmation from './func-on-login-dialog-confirmation';
import funcOnNextPressed from './func-on-next-pressed';
import funcOnPlayPressed from './func-on-play-pressed';
import funcOnQueuedSongPressed from './func-on-queued-song-pressed';
import funcOnSearchQueryChange from './func-on-search-query-change';
import funcOpenAddSeedSongsModal from './func-open-add-seed-songs-modal';
import funcOpenEditSoundcapeNameDialog from './func-open-edit-soundscape-name-dialog';
import funcOpenHomeOptionsModal from './func-open-home-options-modal';
import funcOpenInviteLinkDialog from './func-open-invite-link-dialog';
import funcOpenMembersModal from './func-open-members-modal';
import funcOpenPrivacyPolicy from './func-open-privacy-policy';
import funcOpenSoundscapeOptionsModal from './func-open-soundscape-options-modal';
import funcOpenSeedSongsModal from './func-open-seed-songs-modal';
import funcRegenerateSongs from './func-regenerate-songs';
import funcRemoveSeedSong from './func-remove-seed-song';
import selectedSoundscape from './selected-soundscape';
import state from './state';

const properties = {
  api,
  domain,
  funcAddSeedSong,
  funcAddToQueue,
  funcCloseEditSoundcapeNameDialog,
  funcCloseInviteLinkDialog,
  funcCloseLoginDialog,
  funcCloseModal,
  funcCopyInviteLinkToClipboard,
  funcCreateNewSoundscape,
  funcDeleteSoundscape,
  funcDeleteUser,
  funcDeselectSoundscape,
  funcOnEditSoundscapeNameConfirm,
  funcGetInviteLink,
  funcOnInviteAccept,
  funcOnLoginDialogConfirmation,
  funcOnNextPressed,
  funcOnPlayPressed,
  funcOnQueuedSongPressed,
  funcOnSearchQueryChange,
  funcOpenAddSeedSongsModal,
  funcOpenEditSoundcapeNameDialog,
  funcOpenHomeOptionsModal,
  funcOpenInviteLinkDialog,
  funcOpenMembersModal,
  funcOpenPrivacyPolicy,
  funcOpenSoundscapeOptionsModal,
  funcOpenSeedSongsModal,
  funcRegenerateSongs,
  funcRemoveSeedSong,
  selectedSoundscape,
  state,
};

export default properties;
