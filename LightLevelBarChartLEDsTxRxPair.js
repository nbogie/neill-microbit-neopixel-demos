let mode = ""
let lightStrip: neopixel.Strip = null
radio.onDataPacketReceived( ({ receivedNumber }) =>  {
    lightStrip.showBarGraph(receivedNumber, 255)
})
// for testing
input.onButtonPressed(Button.B, () => {
    radio.sendNumber(Math.random(256))
})
radio.setGroup(35)
lightStrip = neopixel.create(DigitalPin.P0, 100, NeoPixelMode.RGBW)
lightStrip.showBarGraph(255, 255)
basic.pause(500)
if (input.buttonIsPressed(Button.A)) {
    mode = "tx"
} else {
    mode = "rx"
}
basic.showString(mode)
basic.showLeds(`
    # # . # #
    . # . # .
    # # . # #
    . # . . #
    # # . # #
    `)
basic.pause(2000)
basic.clearScreen()
lightStrip.clear()
lightStrip.show()
basic.forever(() => {
    if (mode == "tx") {
        radio.sendNumber(input.lightLevel())
    } else {
    	
    }
    basic.pause(100)
})
