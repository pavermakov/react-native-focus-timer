import Sound from 'react-native-sound';

// Enable playback in silence mode
Sound.setCategory('Playback');

export const sounds = {};

export function initSounds() {
  const bell = new Sound('school_bell.wav', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      return;
    }

    sounds.bell = bell;
  });
}
