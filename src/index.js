const appElement = document.getElementById("app")
// list of sound files:
const sounds = ["clap.wav", "hihat.wav", "kick.wav", "openhat.wav", "ride.wav", "snare.wav", "tink.wav", "tom.wav"]
// keyboard mappings:
const keyBindings = {
  q: sounds[0],
  w: sounds[1],
  e: sounds[2],
  r: sounds[3],
  t: sounds[4],
  y: sounds[5],
  u: sounds[6],
  i: sounds[7],
}


// loop through sound files and reduce them to an array of elements:
let drumKitElements = sounds.reduce((accumulator, sound) => {

  const button = buttonElement(sound, handleClick)
  return [...accumulator, button] 
}, [])
appElement.append(...drumKitElements)

// temp button:

let tempButton = document.createElement("button")
tempButton.textContent = "Temporary button"
tempButton.style.backgroundColor = "#f00" // style elements

appElement.append(tempButton)

console.log(window)

// keyboard events:
window.onkeydown = function(event) {

  if (keyBindings[event.key]) audioElement("../sounds/" + keyBindings[event.key]).play()
  // output from console.log(event.key):
  /*
  keyCode: 68
  altKey: false
  ctrlKey: false
  shiftKey: false
  metaKey: false
  location: 0
  repeat: false
  isComposing: false
  key: "d"
  code: "KeyD"
  */
}
// handles Click events
function handleClick(sound) {
  
  audioElement("../sounds/" + sound).play()
}

// returns a new audio element
// source parameter is path to a sound file
function audioElement(source) {
  const element = new Audio(source)
  return element
} 

// returns a new button with given text and given click event handler function:
function buttonElement(text, clickEvent) {
  const element = document.createElement("button")
  element.textContent = text
  //element.onclick = () => clickEvent(text)
  element.addEventListener("click", () => clickEvent(text))
  return element
} 

//appElement.textContent = "New text..."
/* appElement.innerHTML = `
<audio src="../sounds/clap.wav" controls></audio>
<audio src="../sounds/hihat.wav" controls></audio>
<audio src="../sounds/kick.wav" controls></audio>
<audio src="../sounds/tom.wav" controls></audio>
` */

/* 
sounds.forEach((sound) => console.log(sound))
sounds.forEach(function (sound) {
  console.log(sound)
})
 */


/* 
sounds.forEach((sound) => {
  // this code has one issue, the onclick event gets removed each time the loop runs
  appElement.innerHTML += `<button id="${sound}">${sound}</button>`
  const buttonElement = document.getElementById(sound)
  buttonElement.onclick = handleClick
})
 */

/*  // forEach solution:
let drumKitElements = []
sounds.forEach((sound) => {

  const element = document.createElement("button")
  element.textContent = sound

  //element.onclick = function() {
  //  handleClick(sound)
  //}
  element.onclick = () => handleClick(sound)
  //appElement.append(element)
  drumKitElements.push(element)
})

// ...s unpacks contents of the array:
appElement.append(...drumKitElements) */

/*  // map solution:
 let drumKitElements = sounds.map((sound) => {
 
   const element = document.createElement("button")
   element.textContent = sound
 
   //element.onclick = function() {
   //  handleClick(sound)
   //} 
   element.onclick = () => handleClick(sound)
   //appElement.append(element)
   return element
 })
 
 // ...s unpacks contents of the array:
 appElement.append(...drumKitElements) */

/*   // reduce solution:
  let drumKitElements = sounds.reduce((accumulator, sound) => {
 
    const element = document.createElement("button")
    element.textContent = sound
  
    //element.onclick = function() {
    //  handleClick(sound)
    //} 
    element.onclick = () => handleClick(sound)
    //appElement.append(element)
    
    //  these 2 lines:
    //  accumulator.push(element)
    //  return accumulator
    //    are same as:
    //  return [...accumulator, element] 
    
    return [...accumulator, element] 
  }, [])
  
  // ...s unpacks contents of the array:
  appElement.append(...drumKitElements) */

//appElement.innerHTML = `<button>Clap</button>`


/* const buttonElement = document.querySelector("button")
buttonElement.onclick = handleClick */

/* // handles Click events
function handleClick(sound) {
  
  audioElement("../sounds/" + sound).play()
}

// returns a new audio element
// source parameter is path to a sound file
function audioElement(source) {
  const element = new Audio(source)
  return element
} */

const myAudioElement = new Audio("../sounds/clap.wav");
myAudioElement.play();