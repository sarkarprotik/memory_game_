
// Global Variables
const number_Rows = 4
const number_Columns = 3

let cards = []
let winnerImage


let revealed_Cards

let cardsDeck = []
let flippedCards = []  
let delayFrame = null

let number_attempts = 0

// p5.js functions 

// Calling all images from Giphy.com before loading the Canvas

// FRAMEWORK REQUIRED FUNCTION

function preload() {
   loadImagesToShow()
   winnerImage = loadImage('https://media.giphy.com/media/l0HlSDiA6WUytl9oA/giphy.gif')
}

// Set Up Initial Variables before the Canvas is Drawn
function setup() {
  createCanvas(1352, 1352)
  shuffleCardsDeck(revealed_Cards)
  createCardsArray()
}


// Card Tracking logic is captured 
function mouseClicked() {
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].mouseClick(mouseX, mouseY)) {
      if (flippedCards.length < 2 && !cards[i].reveal) {
        cards[i].setReveal(true)
        flippedCards.push(cards[i])
        if (flippedCards.length === 2) {
          number_attempts++
          if (flippedCards[0].revealImage === flippedCards[1].revealImage) {
            flippedCards[0].isMatch = true
            flippedCards[1].isMatch = true
          }
          // Skipping Frames to create a Delay in animation
          delayFrame = frameCount
        }
      }
    }
  }
}
// Drawing the Canvas at 60 FPS and Tracking Game Logic
// FRAMEWORK REQUIRED FUNCTION
function draw() {
  updateMemoryGameLogic()
  for (let i = 0; i < cards.length; i++) {
    cards[i].show()
  }
  winnerMessage()
}






