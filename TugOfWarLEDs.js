let team2Colour = 0
let team1Colour = 0
let lastPixelPos = 0
let lightStrip: neopixel.Strip = null
let defaultBrightness = 0
let movementStep = 0
let numPixels = 0
let pos = 0
let gameState = ""
input.onButtonPressed(Button.A, () => {
    team1Pressed()
})
input.onPinPressed(TouchPin.P1, () => {
    team2Pressed()
})
input.onPinPressed(TouchPin.P0, () => {
    team1Pressed()
})
function team2Pressed()  {
    pos += movementStep
    checkForWinner()
}
function checkForWinner()  {
    if (pos <= 0) {
        gameState = "finished"
        radio.sendNumber(31)
        lightStrip.showColor(team1Colour)
        basic.showArrow(ArrowNames.West)
        basic.pause(500)
        wipe()
        startGame()
    } else if (pos >= lastPixelPos) {
        radio.sendNumber(32)
        gameState = "finished"
        lightStrip.showColor(team2Colour)
        basic.showArrow(ArrowNames.East)
        basic.pause(500)
        wipe()
        startGame()
    } else {
    	
    }
}
function wipe()  {
    for (let i = 0; i < numPixels; i++) {
        lightStrip.shift(1)
        lightStrip.show()
        basic.pause(10)
    }
}
input.onButtonPressed(Button.B, () => {
    team2Pressed()
})
function team1Pressed()  {
    pos += 0 - movementStep
    checkForWinner()
}
function startGame()  {
    pos = numPixels / 2
    radio.sendNumber(10)
    basic.pause(1000)
    radio.sendNumber(11)
    lightStrip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(800)
    radio.sendNumber(12)
    lightStrip.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(800)
    radio.sendNumber(13)
    lightStrip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(800)
    gameState = "playing"
    radio.sendNumber(20)
    lightStrip.clear()
    lightStrip.show()
}
gameState = "initialising"
radio.setGroup(19)
defaultBrightness = 170
movementStep = 2
numPixels = 60
team1Colour = neopixel.colors(NeoPixelColors.Purple)
team2Colour = neopixel.colors(NeoPixelColors.Yellow)
lastPixelPos = numPixels - 1
lightStrip = neopixel.create(DigitalPin.P2, numPixels, NeoPixelMode.RGBW)
radio.sendNumber(0)
lightStrip.showRainbow(1, 360)
basic.pause(500)
lightStrip.clear()
lightStrip.show()
if (input.buttonIsPressed(Button.B)) {
    basic.showString("Pin" + "2:" + "LEDs")
}
startGame()
basic.forever(() => {
    if (gameState == "playing") {
        lightStrip.clear()
        lightStrip.setBrightness(20)
        lightStrip.setPixelColor(0, team1Colour)
        lightStrip.setPixelColor(1, team1Colour)
        lightStrip.setPixelColor(lastPixelPos - 1, team2Colour)
        lightStrip.setPixelColor(lastPixelPos - 0, team2Colour)
        lightStrip.setPixelColor(numPixels / 2, neopixel.colors(NeoPixelColors.White))
        lightStrip.setBrightness(defaultBrightness)
        lightStrip.setPixelColor(pos + 1, neopixel.colors(NeoPixelColors.Orange))
        lightStrip.setPixelColor(pos + 0, neopixel.colors(NeoPixelColors.Red))
        lightStrip.setPixelColor(pos + -1, neopixel.colors(NeoPixelColors.Orange))
        lightStrip.show()
        basic.pause(100)
    }
    basic.pause(100)
})
