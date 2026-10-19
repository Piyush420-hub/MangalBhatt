/**
 * Sacred Vedic Omkara Synthesizer
 * Generates an ultra-smooth, warm, velvety, non-irritating cosmic 'OM' drone
 * based on the 136.1 Hz cosmic frequency with harmonic Tanpura overtones
 * and a gently breathing vowel filter ("Ooo-mmm-hhh").
 */

let audioCtx = null;
let masterGain = null;
let isPlaying = false;
let oscillators = [];
let lfo = null;
let filter = null;

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

    // Master Gain for very soft, unobtrusive, peaceful volume
    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    // Smooth 3-second fade in to a gentle whisper-quiet volume (0.07 max)
    masterGain.gain.exponentialRampToValueAtTime(0.065, audioCtx.currentTime + 2.5);
    masterGain.connect(audioCtx.destination);

    // Warm Low-pass Vowel Filter (creates the soft "Ooo-mmm" acoustic body)
    filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(320, audioCtx.currentTime);
    filter.Q.setValueAtTime(1.8, audioCtx.currentTime);
    filter.connect(masterGain);

    // Subtle LFO (Low Frequency Oscillator) to gently modulate the filter
    // mimicking a slow, rhythmic meditative breath (0.12 Hz = ~8 second breathing cycle)
    lfo = audioCtx.createOscillator();
    const lfoGain = audioCtx.createGain();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.12, audioCtx.currentTime);
    lfoGain.gain.setValueAtTime(90, audioCtx.currentTime);
    lfo.connect(filter.frequency);
    lfo.start();

    // Harmonic Layers:
    // 1. Fundamental Cosmic Om: 136.1 Hz
    const osc1 = audioCtx.createOscillator();
    const gain1 = audioCtx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(136.1, audioCtx.currentTime);
    gain1.gain.setValueAtTime(0.45, audioCtx.currentTime);
    osc1.connect(gain1);
    gain1.connect(filter);

    // 2. Sub-bass root (Warm earth tone): 68.05 Hz
    const osc2 = audioCtx.createOscillator();
    const gain2 = audioCtx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(68.05, audioCtx.currentTime);
    gain2.gain.setValueAtTime(0.25, audioCtx.currentTime);
    osc2.connect(gain2);
    gain2.connect(filter);

    // 3. Higher Tanpura harmonic (Soft singing overtone): 272.2 Hz
    const osc3 = audioCtx.createOscillator();
    const gain3 = audioCtx.createGain();
    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(272.2, audioCtx.currentTime);
    gain3.gain.setValueAtTime(0.15, audioCtx.currentTime);
    osc3.connect(gain3);
    gain3.connect(filter);

    // 4. Perfect fifth resonance (Panchama): 204.15 Hz
    const osc4 = audioCtx.createOscillator();
    const gain4 = audioCtx.createGain();
    osc4.type = 'sine';
    osc4.frequency.setValueAtTime(204.15, audioCtx.currentTime);
    gain4.gain.setValueAtTime(0.12, audioCtx.currentTime);
    osc4.connect(gain4);
    gain4.connect(filter);

    [osc1, osc2, osc3, osc4].forEach((osc) => osc.start());
    oscillators = [osc1, osc2, osc3, osc4];

    isPlaying = true;
  } catch (e) {
    console.error('Audio initialization error:', e);
  }
};

export const stopOmSound = () => {
  if (!isPlaying || !audioCtx) return;

  try {
    if (masterGain) {
      // Smooth 1.5-second fade out so it never cuts abruptly
      masterGain.gain.setValueAtTime(masterGain.gain.value, audioCtx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.2);

      setTimeout(() => {
        oscillators.forEach((osc) => {
          try {
            osc.stop();
            osc.disconnect();
          } catch (e) {}
        });
        if (lfo) {
          try {
            lfo.stop();
            lfo.disconnect();
          } catch (e) {}
        }
        oscillators = [];
        isPlaying = false;
      }, 1300);
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
