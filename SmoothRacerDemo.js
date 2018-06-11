let frameNum = 0
let playerHue = 0
let stepsPerPixel = 0
let drag = 0
let trailLength = 0
let playerBrightness = 0
let defaultBrightness = 0
let item: neopixel.Strip = null
let trailHyperBrightnesses: number[] = []
let numPixels = 0
let pixelPos1 = 0
let accel1 = 0
let trailBrightnesses: number[] = []
let index = 0
let pos1 = 0
let vel1 = 0
radio.onDataPacketReceived( ({ receivedNumber }) =>  {
    if (receivedNumber == 1) {
        player1Pressed()
    } else if (receivedNumber == 2) {
        player2Pressed()
    } else if (receivedNumber == 10) {
    	
    } else {
        basic.showIcon(IconNames.Confused)
    }
})
function player1Pressed()  {
    vel1 += accel1
}
function updatePosition()  {
    pos1 += vel1
    pixelPos1 = pos1 / stepsPerPixel
    if (pixelPos1 >= numPixels) {
        pos1 = 0
    }
}
input.onButtonPressed(Button.A, () => {
    player1Pressed()
})
function player2Pressed()  {
    vel1 += accel1
}
function drawPlayer()  {
    radio.setGroup(22)
    item.setBrightness(defaultBrightness)
    playerBrightness = pins.map(
    Math.min(Math.max(vel1, 60), 100),
    60,
    100,
    40,
    100
    )
    playerHue = pins.map(
    Math.min(vel1, 60),
    0,
    60,
    355,
    420
    )
    if (vel1 <= 130) {
        item.setPixelColor(pixelPos1, neopixel.hsl(playerHue, 99, playerBrightness))
    } else {
        item.setPixelWhiteLED(pixelPos1, 255)
    }
    drawTrail()
}
function drawUnderEffects()  {
    if (vel1 >= 90) {
        item.setBrightness(pins.map(
        vel1,
        90,
        200,
        1,
        8
        ))
        item.showColor(neopixel.colors(NeoPixelColors.White))
    }
}
function drawTrail()  {
    trailBrightnesses = [30, 15, 8, 4, 3, 2, 1]
    trailHyperBrightnesses = [100, 90, 70, 50, 30, 10, 4, 2, 1, 1]
    trailLength = vel1 / 10
    for (let index2 = 0; index2 <= trailLength - 1; index2++) {
        if (vel1 < 100) {
            item.setPixelColor(pixelPos1 - index2, neopixel.hsl(playerHue, 99, trailBrightnesses[index2]))
        } else {
            item.setPixelWhiteLED(pixelPos1 - index2, trailHyperBrightnesses[index2])
        }
    }
}
index = 0
numPixels = 60
item = neopixel.create(DigitalPin.P0, numPixels, NeoPixelMode.RGBW)
pos1 = 0
vel1 = 0
accel1 = 8
stepsPerPixel = 40
defaultBrightness = 200
drag = 1
basic.forever(() => {
    vel1 += 0 - drag
    if (vel1 < 0) {
        vel1 = 0
    }
    updatePosition()
    item.clear()
    drawUnderEffects()
    drawPlayer()
    basic.pause(10)
    item.show()
    frameNum += 1
})
