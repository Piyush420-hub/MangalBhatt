/**
 * Sacred Vedic Rhythmic Om Chanting Engine
 * Produces the authentic rhythmic cycle:
 * "Ooooooo..." -> "...mmmmmmmm" -> gentle meditative breath pause -> repeats "Oooooommmmmm..."
 * Tuned to 136.1 Hz (Cosmic Omkara frequency) with Tibetan singing bowl harmonic chime.
 */

let audioCtx = null;
let masterGain = null;
let isPlaying = false;
let chantInterval = null;
let currentVolume = 0.22; // Richer, audible, soothing volume

export const setOmVolume = (val) => {
  currentVolume = Math.max(0.05, Math.min(0.5, val));
  if (masterGain && audioCtx) {
    masterGain.gain.setValueAtTime(currentVolume, audioCtx.currentTime);
  }
};

export const getOmVolume = () => currentVolume;

// Play a single rhythmic sacred chant cycle ("Ooooooo...mmmmmmmm")
const playChantCycle = () => {
  if (!isPlaying || !audioCtx) return;

  const now = audioCtx.currentTime;
  const cycleDuration = 7.2; // 7.2 seconds per chant cycle

  try {
    // 1. Tibetan Singing Bowl gentle strike at the start of the chant
    const bowlOsc = audioCtx.createOscillator();
    const bowlGain = audioCtx.createGain();
    bowlOsc.type = 'sine';
    bowlOsc.frequency.setValueAtTime(544.4, now); // Harmonic bell tone
    bowlGain.gain.setValueAtTime(0.001, now);
    bowlGain.gain.exponentialRampToValueAtTime(0.08, now + 0.05);
    bowlGain.gain.exponentialRampToValueAtTime(0.0001, now + 4.0);
    bowlOsc.connect(bowlGain);
    bowlGain.connect(masterGain);
    bowlOsc.start(now);
    bowlOsc.stop(now + 4.1);

    // 2. Chanting Vocal Formant Filter (Morphs from "Oooo" to "Mmmm")
    const vocalFilter = audioCtx.createBiquadFilter();
    vocalFilter.type = 'bandpass';
    vocalFilter.Q.setValueAtTime(2.8, now);

    // Formant Glide: "Oooo" (~480 Hz) glides to "Mmmm" (~195 Hz)
    vocalFilter.frequency.setValueAtTime(320, now);
    vocalFilter.frequency.exponentialRampToValueAtTime(460, now + 0.8); // Open "Ooooo..."
    vocalFilter.frequency.setValueAtTime(460, now + 2.8);
    vocalFilter.frequency.exponentialRampToValueAtTime(195, now + 4.2); // Glide into "...mmmmmm"
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
    chantGain.gain.exponentialRampToValueAtTime(0.9, now + 1.2); // Swell into "Ooooo..."
    chantGain.gain.setValueAtTime(0.85, now + 3.2);             // Sustain
    chantGain.gain.setValueAtTime(0.7, now + 4.8);              // Deep "...mmmm"
    chantGain.gain.exponentialRampToValueAtTime(0.0001, now + 5.9); // Fade out
    chantGain.connect(vocalFilter);

    // 4. Fundamental & Harmonic Vocal Chanting Oscillators
    // Fundamental Om: 136.1 Hz
    const osc1 = audioCtx.createOscillator();
    osc1.type = 'sawtooth'; // Sawtooth provides rich vocal formants
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
      osc.stop(now + 6.0); // Stops at 6.0s, leaving 1.2s peaceful silence before next chant
    });
  } catch (err) {
    console.error('Chant cycle error:', err);
  }
};

export const initOmSound = () => {
  if (isPlaying) return;

  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    // Master Gain (rich, clearly audible yet velvety smooth)
    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(currentVolume, audioCtx.currentTime);
    masterGain.connect(audioCtx.destination);

    isPlaying = true;

    // Play first chant immediately
    playChantCycle();

    // Rhythmic chant repetition: every 7.2 seconds ("Ooooommmmm... [breath pause] ... Ooooommmmm...")
    chantInterval = setInterval(() => {
      if (isPlaying) {
        playChantCycle();
      }
    }, 7200);
  } catch (e) {
    console.error('Audio initialization error:', e);
  }
};

export const stopOmSound = () => {
  if (!isPlaying) return;

  try {
    if (chantInterval) {
      clearInterval(chantInterval);
      chantInterval = null;
    }
    if (masterGain && audioCtx) {
      masterGain.gain.setValueAtTime(masterGain.gain.value, audioCtx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.8);
      setTimeout(() => {
        isPlaying = false;
      }, 900);
    } else {
      isPlaying = false;
    }
  } catch (e) {
    isPlaying = false;
  }
};

export const toggleOmSound = () => {
  if (isPlaying) {
    stopOmSound();
    return false;
  } else {
    initOmSound();
    return true;
  }
};

export const getOmSoundStatus = () => isPlaying;
