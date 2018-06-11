let frameNum = 0
let stepsPerPixel = 0
let trailLength = 0
let numPixels = 0
let trailHyperBrightnesses: number[] = []
let index = 0
let playerHue = 0
let pixelPos1 = 0
let accel1 = 0
let trailBrightnesses: number[] = []
let defaultBrightness: number = 0
let playerBrightness = 0
let pos1 = 0
let vel1 = 0
input.onButtonPressed(Button.A, () => {
    vel1 += accel1
})
function updatePosition() {
    pos1 += vel1
    pixelPos1 = pos1 / stepsPerPixel
    if (pixelPos1 >= numPixels) {
        pos1 = 0
    }
}
function drawPlayer() {
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
    if (vel1 <= 100) {
        item.setPixelColor(pixelPos1, neopixel.hsl(playerHue, 99, playerBrightness))
    } else {
        item.setPixelWhiteLED(pixelPos1, 100)
    }
    drawTrail()
}
function drawUnderEffects() {
    if (vel1 >= 90) {
        item.setBrightness(pins.map(
            vel1,
            90,
            200,
            1,
            8
        ))
        item.showColor(neopixel.colors(NeoPixelColors.White))

        //        for (let index = 0; index < numPixels; index++) {            
        //            item.setPixelColor(index, neopixel.colors(NeoPixelColors.White))
        //       }
    }
}
function drawTrail() {
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
function glowWhite() {
    for (let index3 = 0; index3 <= 255; index3++) {
        item.setBrightness(index3)
        item.showColor(neopixel.colors(NeoPixelColors.White))
    }
    for (let index4 = 255; index4 >= 0; index4--) {
        item.setBrightness(index4)
        item.showColor(neopixel.colors(NeoPixelColors.White))
    }
}
let item: neopixel.Strip = null
index = 0
numPixels = 60
item = neopixel.create(DigitalPin.P0, numPixels, NeoPixelMode.RGBW)
pos1 = 0
vel1 = 0
accel1 = 8
stepsPerPixel = 40
defaultBrightness = 200
basic.forever(() => {
    vel1 += -1
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
