// list of sound files:
const sounds = [
  "clap.wav",
  "hihat.wav",
  "kick.wav",
  "openhat.wav",
  "ride.wav",
  "snare.wav",
  "tink.wav",
  "tom.wav"
];

// keybindings for numeric keypad:
const keyBindings = {
  7: sounds[0],
  8: sounds[1],
  9: sounds[2],
  4: sounds[3],
  5: sounds[4],
  6: sounds[5],
  1: sounds[6],
  2: sounds[7]
};

// array of keys used in numeric keypad
const array = ["7", "8", "9", "4", "5", "6", "1", "2"];


const appDiv = document.getElementById("app");

// create buttons and add event listener
//prettier-ignore
sounds.forEach((sound, index) => {
  let tempButton = document.createElement("button")
  tempButton.textContent = `${array[index]} - ${sound.replace(".wav", "")}`;
                      appDiv.append(tempButton)
                      tempButton.style.backgroundColor = "#f00"
                      tempButton.style.textTransform = "capitalize"
                      tempButton.addEventListener("click", () => play(sound,tempButton))
})

// play sound when key pressed on numeric keypad
window.onkeydown = function (event) {
  if (keyBindings[event.key]) play(keyBindings[event.key]);
};

// play sound and change color of button
function play(sound, button) {
  const audioElement = new Audio(`./sounds/${sound}`);
  audioElement.play();
  if (button) {
    button.style.backgroundColor =
      "#" + (Math.random().toString(16) + "000000").substring(2, 8);
  }
}
