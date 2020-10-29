  let playing = true;
  
  function playSong() {
    if (playing) {
      const song = document.querySelector('#song'),
      bust = document.querySelector('#dante-bust'); 
      song.play();
      playing = false;
    } else {
      song.pause();
      playing = true;
    }
  }
