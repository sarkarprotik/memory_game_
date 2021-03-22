// Game functions & Logic



function updateMemoryGameLogic() {
    if (delayFrame && (frameCount - delayFrame) > 30) {
      for (let i = 0; i < cards.length; i++) {
        if (!cards[i].isMatch && cards[i].reveal) {
          cards[i].setReveal(false)
        }
      }
      flippedCards = []
      delayFrame = null
    }
  }

function createCardsArray() {
    for (let i = 0; i < number_Columns; i++) {
      for (let j = 0; j < number_Rows; j++) {
        cards.push(new Card(i * 280 + 40, j * 280 + 40, cardsDeck.pop()))
      }
    }
  }  


function loadImagesToShow() {
    revealed_Cards = [
      loadImage("https://media.giphy.com/media/LPkczVwUYcMbXsRCdP/giphy-downsized.gif"),
      loadImage("https://media.giphy.com/media/bZgXe41QE9SKXdRCgD/giphy.gif"),
      loadImage("https://media.giphy.com/media/HnrKxE23lWCbu/giphy.gif"),
      loadImage("https://media.giphy.com/media/pzR64ZEgb9nxj28Fk1/giphy.gif"),
      loadImage("https://media.giphy.com/media/gHnSlW9EBMHLizWnGr/giphy.gif"),
      loadImage("https://media.giphy.com/media/nDSlfqf0gn5g4/giphy.gif"),
    ]
  }
  

function shuffleCardsDeck(images) {
    for (let i = 0; i < revealed_Cards.length; i++) {
      cardsDeck.push(images[i])
      cardsDeck.push(images[i])
    }
    
    cardsDeck.sort(function() {
      return 0.5 - random()
    })

  }

  function winnerMessage() {
    let didAllPairsMatch = true
    for (let i = 0; i < cards.length; i++) {
      didAllPairsMatch = didAllPairsMatch && cards[i].isMatch
    }
    if (didAllPairsMatch) {
      image(winnerImage,0,0,width, height)
      
    }
  }