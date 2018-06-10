let item: neopixel.Strip = null
input.onButtonPressed(Button.A, () => {
    item = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
    item.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showString("grb")
    basic.showLeds(`
        . # # . .
        # . . . .
        # # # . .
        # . # . .
        . # . . .
        `)
})
input.onButtonPressed(Button.AB, () => {
    item = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB_RGB)
    item.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showString("rgb")
    basic.showLeds(`
        . . # # .
        . # . . .
        . # . . .
        . # . . .
        . # . . .
        `)
})
input.onButtonPressed(Button.B, () => {
    item = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGBW)
    item.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.showString("w(rgbw)")
    basic.showLeds(`
        # . . . #
        # . . . #
        # . # . #
        # . # . #
        . # . # .
        `)
})
