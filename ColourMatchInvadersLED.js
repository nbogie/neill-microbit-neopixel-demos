let bulletHue = 0
let bulletState = ""
let vel = 0
let numPixels = 0
let alienPos = 0
let pos = 0
let alienHue = 0
let item: neopixel.Strip = null
let alienState = ""
input.onButtonPressed(Button.B, () => {
    alienState = "alive"
    alienHue = Math.random(360)
    alienPos = 10 * (numPixels - 15)
})
let score = 0
pos = 0
numPixels = 60
class Foo {

}
item = neopixel.create(DigitalPin.P0, numPixels, NeoPixelMode.RGB)
bulletHue = 0
bulletState = "dead"
alienState = "dead"
score = 0
basic.forever(() => {
    item.clear()
    if (input.buttonIsPressed(Button.A)) {
        if (bulletState == "charging") {
            vel += 1
            bulletHue += 2
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
    }
    if (!(alienState == "dead")) {
        item.setPixelColor(alienPos / 10 - 0, neopixel.hsl(alienHue, 99, 50))
    }
    item.show()
    basic.pause(20)
})
