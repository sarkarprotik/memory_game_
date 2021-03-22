function Card (x, y, revealImage) {
    this.x = x
    this.y = y
    this.width = 250
    this.revealImage = revealImage
    this.reveal = false

  this.show = function() {
    fill('pink')
    rect(this.x, this.y, this.width, this.width)

    if (this.reveal === true) {
      image(this.revealImage, this.x, this.y, this.width, this.width)
    } else {
      fill('lightblue')
      rect(this.x, this.y, this.width, this.width)
    }
  }

  this.setReveal = function(reveal) {
    this.reveal = reveal
  }

  this.mouseClick = function (x, y) {
    return x >= this.x && x <= this.x + this.width  &&
      y >= this.y && y <= this.y + this.width
  }
}