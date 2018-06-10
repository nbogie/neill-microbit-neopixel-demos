//WIP - reworking from my zip halo demo
let passIx = 0
let index = 0
let item = 0
let firstColor = 0
let numPixels = 0
let pattern: neopixel.Strip = null
let secondColor = 0
let fnNames: string[] = []
let myBrightness = 0
function wipe()  {
    for (let i = 0; i < numPixels; i++) {
        pattern.shift(1)
        pattern.show()
        basic.pause(10)
    }
    basic.clearScreen()
}
input.onButtonPressed(Button.A, () => {
    nextFn()
})
function dial()  {
    pattern.clear()
    pattern.range(0, 1).showColor(neopixel.colors(NeoPixelColors.Indigo))
    for (let i = 0; i < numPixels; i++) {
        basic.pause(50)
        pattern.rotate(1)
        pattern.show()
    }
    wipe()
}
input.onButtonPressed(Button.AB, () => {
    radio.sendNumber(fnIx)
})
function glow()  {
    myBrightness = 0
    for (let i = 0; i < 2; i++) {
        for (let i = 0; i < 40; i++) {
            pattern.setBrightness(myBrightness)
            pattern.showColor(neopixel.colors(NeoPixelColors.Red))
            myBrightness += 6
            basic.pause(30)
        }
        for (let i = 0; i < 40; i++) {
            myBrightness += -6
            pattern.setBrightness(myBrightness)
            pattern.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(30)
        }
    }
    pattern.setBrightness(255)
}
function spinFaster()  {
    pattern.clear()
    for (let passIx2 = 0; passIx2 <= 10; passIx2++) {
        pattern.setBrightness(5 + passIx2 * 25)
        for (let ledIx2 = 0; ledIx2 <= numPixels / 4 - 1; ledIx2++) {
            pattern.range(ledIx2, 1).showColor(neopixel.colors(NeoPixelColors.Indigo))
            basic.pause(50 - passIx2 * 5)
            pattern.rotate(1)
            pattern.show()
        }
    }
    for (let passIx3 = 0; passIx3 <= 10; passIx3++) {
        pattern.setBrightness((10 - passIx3) * 25)
        for (let ledIx3 = 0; ledIx3 <= numPixels / 4 - 1; ledIx3++) {
            pattern.range(ledIx3, 1).showColor(neopixel.colors(NeoPixelColors.Indigo))
            basic.pause(50 - (10 - passIx3) * 5)
            pattern.rotate(-1)
            pattern.show()
        }
    }
    wipe()
}
input.onButtonPressed(Button.B, () => {
    runCurrFn()
})
function colorByTilt()  {
    pattern.clear()
    for (let i = 0; i < 100; i++) {
        pattern.showColor(neopixel.hsl(pins.map(
        input.rotation(Rotation.Pitch),
        -90,
        90,
        0,
        360
        ), 99, 50))
        basic.pause(50)
    }
    pattern.clear()
    pattern.show()
}
function nextFn()  {
    fnIx += 1
    if (fnIx >= fnNames.length) {
        fnIx = 0
    }
    basic.showNumber(fnIx)
    basic.clearScreen()
}
function rainbowRotate()  {
    pattern.showRainbow(1, 360)
    pattern.setBrightness(255)
    for (let i = 0; i < numPixels * 2; i++) {
        basic.pause(50)
        pattern.rotate(1)
        pattern.show()
    }
    pattern.clear()
    pattern.show()
}
function threeSpinB()  {
    pattern.clear()
    pattern.show()
    pattern.range(0, 1).showColor(neopixel.colors(NeoPixelColors.Yellow))
    pattern.range(numPixels / 3, 1).showColor(neopixel.colors(NeoPixelColors.Yellow))
    pattern.range(numPixels * 2 / 3, 1).showColor(neopixel.colors(NeoPixelColors.Yellow))
    for (let i = 0; i < 100; i++) {
        basic.pause(50)
        pattern.rotate(0 - pins.map(
        input.rotation(Rotation.Roll),
        -180,
        180,
        -5,
        5
        ))
        pattern.show()
    }
    wipe()
}
function setupFns()  {
    fnNames = ["sparkle", "sparkleGlow", "glow", "rainbowSpin", "dial", "3Spin", "3SpinB", "3SpinC", "colorByTilt", "spinFaster"]
    fnIx = 7
}
function threeSpinC()  {
    secondColor = neopixel.hsl(Math.random(360), 99, 50)
    firstColor = neopixel.hsl(Math.random(360), 99, 50)
    pattern.clear()
    pattern.setBrightness(255)
    pattern.range(0, 1).showColor(firstColor)
    pattern.range(numPixels / 3, 1).showColor(firstColor)
    pattern.range(numPixels * 2 / 3, 1).showColor(firstColor)
    pattern.setBrightness(30)
    pattern.range(numPixels - 1, 1).showColor(secondColor)
    pattern.range(1, 1).showColor(secondColor)
    pattern.range(numPixels / 3 - 1, 1).showColor(secondColor)
    pattern.range(numPixels / 3 + 1, 1).showColor(secondColor)
    pattern.range(numPixels * 2 / 3 - 1, 1).showColor(secondColor)
    pattern.range(numPixels * 2 / 3 + 1, 1).showColor(secondColor)
    for (let i = 0; i < 100; i++) {
        basic.pause(50)
        pattern.rotate(0 - pins.map(
        input.rotation(Rotation.Roll),
        -180,
        180,
        -5,
        5
        ))
        pattern.show()
    }
    wipe()
}
radio.onDataPacketReceived( ({ receivedNumber }) =>  {
    if (receivedNumber >= 0) {
        if (receivedNumber < fnNames.length) {
            fnIx = receivedNumber
            runCurrFn()
        }
    }
})
function runCurrFn()  {
    switch (fnIx) {
        case 0:
            randomSparkle();
            break;
        case 1:
            randomSparkleWithGlow();
            break;
        case 2:
            glow();
            break;
        case 3:
            rainbowRotate();
            break;
        case 4:
            dial();
            break;
        case 5:
            threeSpin();
            break;
        case 6:
            threeSpinB();
            break;
        case 7:
            threeSpinC();
            break;
        case 8:
            colorByTilt();
            break;
        case 9:
            spinFaster();
            break;
    }
}
function demoAll()  {
    spinFaster()
    randomSparkleWithGlow()
    rainbowRotate()
    threeSpinC()
    dial()
    glow()
    threeSpinB()
}
function threeSpin()  {
    pattern.clear()
    pattern.setBrightness(255)
    pattern.range(0, 1).showColor(neopixel.colors(NeoPixelColors.Blue))
    pattern.range(numPixels / 3, 1).showColor(neopixel.colors(NeoPixelColors.Green))
    pattern.range(numPixels * 2 / 3, 1).showColor(neopixel.colors(NeoPixelColors.Purple))
    for (let i = 0; i < 100; i++) {
        basic.pause(50)
        pattern.rotate(pins.map(
        input.rotation(Rotation.Roll),
        -180,
        180,
        -5,
        5
        ))
        pattern.show()
    }
    wipe()
}
function randomSparkleWithGlow()  {
    pattern.clear()
    pattern.show()
    for (let index2 = 0; index2 <= 50; index2++) {
        for (let i = 0; i < 4; i++) {
            pattern.setBrightness(index2 * 5)
            pattern.range(Math.random(numPixels + 1), 1).showColor(neopixel.hsl(Math.random(361), 100, 50))
            basic.pause(100 - index2 * 2)
            pattern.clear()
        }
    }
    for (let i = 0; i < 50; i++) {
        pattern.setBrightness(255)
        pattern.range(Math.random(numPixels + 1), 1).showColor(neopixel.hsl(Math.random(361), 100, 50))
        basic.pause(0)
        pattern.clear()
    }
    pattern.clear()
    pattern.show()
    for (let index3 = 0; index3 <= 50; index3++) {
        pattern.setBrightness(index3 * 5)
        pattern.showColor(neopixel.hsl(index3, 100, 50))
        basic.pause(5)
    }
    for (let index4 = 0; index4 <= 50; index4++) {
        pattern.setBrightness((50 - index4) * 5)
        pattern.showColor(neopixel.hsl(50 - index4, 100, 50))
        basic.pause(40)
    }
    pattern.setBrightness(255)
}
function randomSparkle()  {
    pattern.clear()
    pattern.setBrightness(255)
    for (let i = 0; i < 50; i++) {
        basic.pause(50)
        pattern.clear()
        pattern.range(Math.random(numPixels + 1), 1).showColor(neopixel.colors(NeoPixelColors.White))
    }
    wipe()
}
let fnIx = 0
item = 0
index = 0
numPixels = 60
pattern = neopixel.create(DigitalPin.P0, numPixels, NeoPixelMode.RGBW)
passIx = 0
fnIx = 7
radio.setGroup(5)
setupFns()
basic.showLeds(`
    . . . # #
    . . . # .
    # # . # #
    # . . . #
    # # . # #
    `)
basic.clearScreen()
