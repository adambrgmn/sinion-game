export default class GameAudio {
  constructor() {
    this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    this.audioDest = this.audioCtx.destination;
    this.osc = null;
    this.frequencys = {
      1: 165,
      2: 440,
      3: 278,
      4: 330,
    };
  }

  start = (tile) => {
    this.osc = this.audioCtx.createOscillator();
    this.osc.frequency.value = this.frequencys[tile];
    this.osc.type = 'sine';
    this.osc.start(this.audioCtx.currentTime);
    this.osc.connect(this.audioDest);
  }

  stop = () => {
    this.osc.stop(this.audioCtx.currentTime);
    this.osc.disconnect(this.audioDest);
    this.osc = null;
  }
}
