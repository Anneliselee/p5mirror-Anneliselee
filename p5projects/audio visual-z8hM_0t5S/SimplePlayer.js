// a subclass of Tone.Player that adds a progress function to it.
// The only permitted playbackRate is 1.

class SimplePlayer extends Tone.Player {
  constructor(...args){
    super(...args);
    this.playbackRate = 1;
  }
  
  start(...args){
    // assuming args[0] is always time
    this.startTime = args[0];
    super.start(...args);
  }
  
  progress(){
    return (Tone.now() - this.startTime) / this._buffer.duration;
  }
  
  // disable setting playbackRate to anything other than 1
  set playbackRate(rate) {
    if(rate != 1) throw new Error("Setting the playbackRate value to any value other than 1 is disabled in SimplePlayer. If required, use Tone.Player instead.");
  }
}

