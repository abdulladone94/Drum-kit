for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    btninner = this.innerHTML;
    soundMaker(btninner);
    buttonAnimation(btninner);
  });
}

document.addEventListener("keypress", event => {
  soundMaker(event.key);
  buttonAnimation(event.key);
});

const buttonAnimation = currentKey => {
    document.querySelector("." + currentKey).classList.add("pressed");
    setTimeout(() => {
      document.querySelector("." + currentKey).classList.remove("pressed");
    }, 200);
  };
  
  const handleSoundPlay = fileName => {
    var audio = new Audio(`sounds/${fileName}.mp3`);
    audio.play();
  };

const soundMaker = key => {
  switch (key) {
    case "w":
      handleSoundPlay("tom-1");
      break;

    case "a":
      handleSoundPlay("tom-2");
      break;

    case "s":
      handleSoundPlay("tom-3");
      break;

    case "d":
      handleSoundPlay("tom-4");
      d.play();
      break;

    case "j":
      handleSoundPlay("snare");
      break;

    case "k":
      handleSoundPlay("kick-bass");
      break;

    case "l":
      handleSoundPlay("crash");
      break;

    default:''
  }
};
