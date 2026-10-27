/**
 * Ethereal Dream Pad Audio Engine (Web Audio API)
 * Pure generative ambient chords inspired by atmospheric portfolio soundscapes.
 * Sound is OFF by default and only initializes when the user explicitly clicks enable.
 */

class DreamAudioEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];
  private filter: BiquadFilterNode | null = null;
  private lfo: OscillatorNode | null = null;

  // Dream chord frequencies (F# minor 9th / Dmaj7 ambient voicing: F#2, C#3, A3, E4, G#4)
  private readonly chordFrequencies = [92.50, 138.59, 220.00, 329.63, 415.30];

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    this.init();
    if (!this.ctx) return;

    if (this.isPlaying) return;

    try {
      const now = this.ctx.currentTime;

      // Master gain node
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0, now);
      // Gentle fade in to very soft, cozy background level
      this.masterGain.gain.linearRampToValueAtTime(0.045, now + 2.5);
      this.masterGain.connect(this.ctx.destination);

      // Lowpass filter for warm, dreamy analog timbre
      this.filter = this.ctx.createBiquadFilter();
      this.filter.type = 'lowpass';
      this.filter.frequency.setValueAtTime(480, now);
      this.filter.Q.setValueAtTime(1.8, now);
      this.filter.connect(this.masterGain);

      // Gentle LFO filter sweep
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.setValueAtTime(140, now);
      lfoGain.connect(this.filter.frequency);

      this.lfo = this.ctx.createOscillator();
      this.lfo.type = 'sine';
      this.lfo.frequency.setValueAtTime(0.12, now); // 12-second breath cycle
      this.lfo.connect(lfoGain);
      this.lfo.start();

      // Create gentle detuned oscillators for the ambient chord pad
      this.oscillators = [];
      this.chordFrequencies.forEach((freq, index) => {
        if (!this.ctx || !this.filter) return;

        // Two slightly detuned oscillators per note for lush chorus effect
        [-4, 4].forEach((detune) => {
          if (!this.ctx || !this.filter) return;
          const osc = this.ctx.createOscillator();
          const noteGain = this.ctx.createGain();

          osc.type = index % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, now);
          osc.detune.setValueAtTime(detune, now);

          noteGain.gain.setValueAtTime(0.18 / this.chordFrequencies.length, now);

          osc.connect(noteGain);
          noteGain.connect(this.filter);
          osc.start();
          this.oscillators.push(osc);
        });
      });

      this.isPlaying = true;
    } catch (err) {
      console.warn('Audio playback could not start automatically', err);
    }
  }

  public stop() {
    if (!this.ctx || !this.isPlaying || !this.masterGain) return;

    try {
      const now = this.ctx.currentTime;
      // Gentle fade out
      this.masterGain.gain.linearRampToValueAtTime(0.0001, now + 1.2);

      setTimeout(() => {
        this.oscillators.forEach(osc => {
          try { osc.stop(); osc.disconnect(); } catch {}
        });
        this.oscillators = [];
        if (this.lfo) {
          try { this.lfo.stop(); this.lfo.disconnect(); } catch {}
          this.lfo = null;
        }
        this.isPlaying = false;
      }, 1300);
    } catch {
      this.isPlaying = false;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const dreamAudio = new DreamAudioEngine();

