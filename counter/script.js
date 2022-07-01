const counterElement = document.getElementById("counter")
const clickAreaElement = document.getElementById("click-area")
const resetButton = document.querySelector("header > button")

let counter = 0

function setBgSize (counter) {
  clickAreaElement.style.backgroundSize = counter + "%"
}

function countUp () {
  setBgSize(counter)
  counterElement.textContent = counter++
}

function reset () {
  counter = 0;
  counterElement.textContent = counter
  setBgSize(counter)
}

clickAreaElement.addEventListener("click", countUp)
document.addEventListener("keyup", (event) => {
  if (event.code === "Space" || event.code === "Enter") {
    countUp()
  }
})

resetButton.addEventListener("click", reset)

countUp()