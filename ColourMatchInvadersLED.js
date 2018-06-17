let bulletHueChangeStep = 0
let bulletState = ""
let vel = 0
let numPixels = 0
let bulletHue = 0
let pos = 0
let scale: number[] = []
let alienVel = 0
let alienPos = 0
let alienHue = 0
let item: neopixel.Strip = null
let alienState = ""
function playStartMelody() {
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Quarter))
    music.playTone(262, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(262, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Whole))
}
function spawnAlien() {
    alienState = "alive"
    alienHue = Math.random(360)
    alienPos = 10 * (numPixels - 15)
    alienVel = 1 + Math.random(9)
}
input.onButtonPressed(Button.B, () => {
    spawnAlien()
})
input.onGesture(Gesture.Shake, () => {
    basic.showNumber(alienHue)
    basic.showString("-")
    basic.showNumber(bulletHue)
})
function gameOver() {
    item.showColor(NeoPixelColors.Red)
    for (let value of scale) {
        music.playTone(value, music.beat(BeatFraction.Eighth))
    }
    basic.showString("Score: ", 40)
    basic.showNumber(score, 40)
    basic.pause(2000)
}
let score = 0
alienVel = 1
pos = 0
numPixels = 60
class Foo {

}
item = neopixel.create(DigitalPin.P0, numPixels, NeoPixelMode.RGB)
bulletHue = 0
bulletHueChangeStep = 5
bulletState = "dead"
alienState = "dead"
score = 0
scale = [147, 175, 208, 247, 294, 349, 415, 494, 587, 698, 831, 988]
scale.reverse()
playStartMelody()
spawnAlien()
basic.forever(() => {
    item.clear()
    alienPos = alienPos - 1
    if (alienState == "alive" && alienPos <= 0) {
        gameOver()
    }
    if (input.buttonIsPressed(Button.A)) {
        if (bulletState == "charging") {
            vel += 1
            bulletHue += bulletHueChangeStep
            if (bulletHue >= 360) {
                bulletHue = 0
            }
        } else {
            vel = 0
            bulletState = "charging"
            pos = 0
        }
        music.ringTone(pins.map(
            vel,
            0,
            200,
            100,
            4000
        ))
    } else {
        music.rest(5)
        if (bulletState == "dead") {

        } else {
            bulletState = "flying"
            pos += vel
            vel += -1
            if (pos < 10 * numPixels) {

            } else {
                if (pos >= alienPos) {
                    led.toggle(4, 0)
                    if (Math.abs(alienHue - bulletHue) < 50 || Math.min(alienHue, bulletHue) + 360 - Math.max(alienHue, bulletHue) < 50) {
                        alienState = "dead"
                        bulletState = "dead"
                        score += 1
                        basic.showNumber(score, 30)
                        led.toggle(0, 0)
                        pos = 0
                        spawnAlien()
                    }
                } else {
                    pos = 0
                    bulletState = "dead"
                }
                pos = 0
                bulletState = "dead"
            }
        }
    }
    if (!(bulletState == "dead")) {
        item.setPixelColor(pos / 10, neopixel.hsl(bulletHue, 99, 50))
        if (pos > 11) {
            item.setPixelColor(pos / 10 - 1, neopixel.hsl(bulletHue, 99, 20))
        }
        if (pos > 21) {
            item.setPixelColor(pos / 10 - 2, neopixel.hsl(bulletHue, 99, 5))
        }
    }
    if (!(alienState == "dead")) {
        if (alienPos > 21) {
            item.setPixelColor(alienPos / 10 - 2, neopixel.hsl(alienHue, 99, 3))
        }
        if (alienPos > 11) {
            item.setPixelColor(alienPos / 10 - 1, neopixel.hsl(alienHue, 99, 10))
        }
        item.setPixelColor(alienPos / 10 - 0, neopixel.hsl(alienHue, 99, 50))
        if (alienPos / 10 < numPixels - 1) {
            item.setPixelColor(alienPos / 10 + 1, neopixel.hsl(alienHue, 99, 10))
        }
        if (alienPos / 10 < numPixels - 2) {
            item.setPixelColor(alienPos / 10 + 2, neopixel.hsl(alienHue, 99, 3))
        }
    }
    item.show()
    basic.pause(20)
})
