/**
 * Sacred Vedic Rhythmic Om Chanting Engine
 * Produces authentic rhythmic Vedic chanting:
 * "Ooooooo..." -> "...mmmmmmmm" -> gentle meditative breath pause -> repeats "Oooooommmmmm..."
 * Tuned to 136.1 Hz (Cosmic Omkara frequency) with Tibetan singing bowl harmonic chime.
 * 
 * Auto-play is ON by default.
 * If user/lead chooses to mute, preference is saved and honored.
 * Browser autoplay policy is handled gracefully with instant gesture unlock.
 */

let audioCtx = null;
let masterGain = null;
let isPlaying = false;
let chantInterval = null;
let currentVolume = 0.28;
let hasAttachedGestureUnlock = false;
const listeners = new Set();

const notifyListeners = () => {
  listeners.forEach((callback) => {
    try {
      callback(isPlaying);
    } catch (e) {
      console.warn('Listener error:', e);
    }
  });
};

export const subscribeOmSound = (callback) => {
  listeners.add(callback);
  callback(isPlaying);
  return () => listeners.delete(callback);
};

export const setOmVolume = (val) => {
  currentVolume = Math.max(0.05, Math.min(0.6, val));
  if (masterGain && audioCtx) {
    try {
      masterGain.gain.setValueAtTime(currentVolume, audioCtx.currentTime);
    } catch (e) {}
  }
};

export const getOmVolume = () => currentVolume;

// Play a single rhythmic sacred chant cycle ("Ooooooo...mmmmmmmm")
const playChantCycle = () => {
  if (!isPlaying || !audioCtx) return;
  if (audioCtx.state === 'suspended') return;

  const now = audioCtx.currentTime;

  try {
    // 1. Tibetan Singing Bowl gentle strike at the start of the chant
    const bowlOsc = audioCtx.createOscillator();
    const bowlGain = audioCtx.createGain();
    bowlOsc.type = 'sine';
    bowlOsc.frequency.setValueAtTime(544.4, now); // Harmonic bell chime
    bowlGain.gain.setValueAtTime(0.001, now);
    bowlGain.gain.exponentialRampToValueAtTime(0.12, now + 0.05);
    bowlGain.gain.exponentialRampToValueAtTime(0.0001, now + 4.2);
    bowlOsc.connect(bowlGain);
    bowlGain.connect(masterGain);
    bowlOsc.start(now);
    bowlOsc.stop(now + 4.3);

    // 2. Chanting Vocal Formant Filter (Morphs from "Oooo" to "Mmmm")
    const vocalFilter = audioCtx.createBiquadFilter();
    vocalFilter.type = 'bandpass';
    vocalFilter.Q.setValueAtTime(2.8, now);

    // Formant Glide: "Oooo" (~460 Hz) glides to "Mmmm" (~195 Hz)
    vocalFilter.frequency.setValueAtTime(320, now);
    vocalFilter.frequency.exponentialRampToValueAtTime(460, now + 0.8);
    vocalFilter.frequency.setValueAtTime(460, now + 2.8);
    vocalFilter.frequency.exponentialRampToValueAtTime(195, now + 4.2);
    vocalFilter.frequency.setValueAtTime(195, now + 5.5);

    // Lowpass warmth filter
    const warmthFilter = audioCtx.createBiquadFilter();
    warmthFilter.type = 'lowpass';
    warmthFilter.frequency.setValueAtTime(580, now);

    vocalFilter.connect(warmthFilter);
    warmthFilter.connect(masterGain);

    // 3. Cycle Amplitude Envelope (Swell -> Sustain -> Glide -> Fade -> Silence Breath)
    const chantGain = audioCtx.createGain();
    chantGain.gain.setValueAtTime(0.001, now);
    chantGain.gain.exponentialRampToValueAtTime(0.95, now + 1.2);
    chantGain.gain.setValueAtTime(0.9, now + 3.2);
    chantGain.gain.setValueAtTime(0.72, now + 4.8);
    chantGain.gain.exponentialRampToValueAtTime(0.0001, now + 5.9);
    chantGain.connect(vocalFilter);

    // 4. Fundamental & Harmonic Vocal Chanting Oscillators
    // Fundamental Om: 136.1 Hz
    const osc1 = audioCtx.createOscillator();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(136.1, now);
    osc1.connect(chantGain);

    // Warm Earth sub-bass: 68.05 Hz
    const osc2 = audioCtx.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(68.05, now);
    osc2.connect(chantGain);

    // Tanpura fifth harmonic: 204.15 Hz
    const osc3 = audioCtx.createOscillator();
    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(204.15, now);
    osc3.connect(chantGain);

    // Octave overtone: 272.2 Hz
    const osc4 = audioCtx.createOscillator();
    osc4.type = 'triangle';
    osc4.frequency.setValueAtTime(272.2, now);
    osc4.connect(chantGain);

    [osc1, osc2, osc3, osc4].forEach((osc) => {
      osc.start(now);
      osc.stop(now + 6.0); // 1.2s peaceful silence before next cycle
    });
  } catch (err) {
    console.error('Chant cycle error:', err);
  }
};

// Internal function to kick off the chant loop
const startChantLoop = () => {
  if (chantInterval) {
    clearInterval(chantInterval);
    chantInterval = null;
  }

  // Play immediately
  playChantCycle();

  // Repeat every 7.2 seconds
  chantInterval = setInterval(() => {
    if (isPlaying && audioCtx && audioCtx.state === 'running') {
      playChantCycle();
    }
  }, 7200);
};

export const initOmSound = async () => {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return false;

    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      await audioCtx.resume();
    }

    if (!masterGain) {
      masterGain = audioCtx.createGain();
      masterGain.connect(audioCtx.destination);
    }
    masterGain.gain.setValueAtTime(currentVolume, audioCtx.currentTime);

    isPlaying = true;
    notifyListeners();

    startChantLoop();

    // User explicitly wants sound, remove muted preference
    localStorage.removeItem('mangalbhat_sound_muted');
    return true;
  } catch (e) {
    console.error('Audio initialization error:', e);
    return false;
  }
};

export const stopOmSound = (isUserExplicitMute = true) => {
  try {
    if (chantInterval) {
      clearInterval(chantInterval);
      chantInterval = null;
    }

    if (masterGain && audioCtx) {
      try {
        masterGain.gain.setValueAtTime(masterGain.gain.value, audioCtx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.4);
      } catch (e) {}
    }

    isPlaying = false;
    notifyListeners();

    if (isUserExplicitMute) {
      localStorage.setItem('mangalbhat_sound_muted', 'true');
    }
  } catch (e) {
    isPlaying = false;
    notifyListeners();
  }
};

export const toggleOmSound = () => {
  if (isPlaying) {
    stopOmSound(true);
    return false;
  } else {
    initOmSound();
    return true;
  }
};

export const getOmSoundStatus = () => isPlaying;

/**
 * Setup default Sound ON on page load & page reloads.
 * If user previously clicked Mute, respect their choice.
 * Otherwise, start playing immediately.
 * In case the browser holds the AudioContext in 'suspended' until user interaction,
 * universal gesture listeners (scroll, click, touch, keydown) unlock and resume it instantly!
 */
export const setupDefaultSound = () => {
  // If user has explicitly chosen to mute, do not auto-start
  if (localStorage.getItem('mangalbhat_sound_muted') === 'true') {
    isPlaying = false;
    notifyListeners();
    return;
  }

  const unlockAudio = async () => {
    // If user muted in the meantime, abort
    if (localStorage.getItem('mangalbhat_sound_muted') === 'true') {
      removeUnlockListeners();
      return;
    }

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      try {
        await audioCtx.resume();
      } catch (e) {}
    }

    if (!masterGain && audioCtx) {
      masterGain = audioCtx.createGain();
      masterGain.connect(audioCtx.destination);
    }

    if (masterGain && audioCtx) {
      masterGain.gain.setValueAtTime(currentVolume, audioCtx.currentTime);
    }

    if (!isPlaying) {
      isPlaying = true;
      notifyListeners();
      startChantLoop();
    }

    if (audioCtx && audioCtx.state === 'running') {
      removeUnlockListeners();
    }
  };

  const removeUnlockListeners = () => {
    if (!hasAttachedGestureUnlock) return;
    hasAttachedGestureUnlock = false;
    ['pointerdown', 'mousedown', 'touchstart', 'scroll', 'click', 'keydown'].forEach((evt) => {
      window.removeEventListener(evt, unlockAudio, { capture: true });
    });
  };

  const attachUnlockListeners = () => {
    if (hasAttachedGestureUnlock) return;
    hasAttachedGestureUnlock = true;
    ['pointerdown', 'mousedown', 'touchstart', 'scroll', 'click', 'keydown'].forEach((evt) => {
      window.addEventListener(evt, unlockAudio, { capture: true, passive: true });
    });
  };

  // 1. Try immediate start (browser may allow autoplay directly)
  unlockAudio();

  // 2. Also register universal gesture listeners to unlock instantly on any interaction/scroll
  attachUnlockListeners();
};
