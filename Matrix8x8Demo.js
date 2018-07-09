let d = 0
input.onButtonPressed(Button.AB, () => {
    for (let i = 0; i < 100; i++) {
        item.clear()
        item.setMatrixColor(Math.random(8), Math.random(8), neopixel.hsl(Math.random(360), 100, 50))
        item.show()
        basic.pause(20)
    }
})
input.onButtonPressed(Button.B, () => {
    for (let i = 0; i < 4; i++) {
        d = 100
        let c: NeoPixelColors = NeoPixelColors.Violet;
        showCircle1(c)
        basic.pause(d)
        showCircle2(c)
        basic.pause(d)
        showCircle3(c)
        basic.pause(d)
        showCircle4(c)
        basic.pause(d)
        showCircle3(c)
        basic.pause(d)
        showCircle2(c)
        basic.pause(d)
        showCircle1(c)
        basic.pause(d)
        item.clear()
        item.show()
        basic.pause(d)
    }
})
function randomColor() {
    return neopixel.hsl(Math.random(360), 100, 50)
}
input.onButtonPressed(Button.A, () => {
    let c1: NeoPixelColors = randomColor();
    let c2: NeoPixelColors = randomColor();
    let c3: NeoPixelColors = randomColor();
    let c4: NeoPixelColors = randomColor();
    for (let i = 0; i < 2; i++) {
        d = 50
        item.clear()
        addCircle1(c1)
        item.show()
        basic.pause(d)
        item.clear()
        addCircle2(c1)
        addCircle1(c2)
        item.show()
        basic.pause(d)
        item.clear()
        addCircle3(c1)
        addCircle2(c2)
        addCircle1(c3)
        item.show()
        basic.pause(d)
        item.clear()
        addCircle4(c1)
        addCircle3(c2)
        addCircle2(c3)
        addCircle1(c4)
        item.show()
        basic.pause(d)
        item.clear()
        addCircle3(c1)
        addCircle2(c2)
        addCircle1(c3)
        item.show()
        basic.pause(d)
        item.clear()
        addCircle2(c1)
        addCircle1(c2)
        item.show()
        basic.pause(d)
        item.clear()
        addCircle1(1)
        item.show()
        basic.pause(d)
        item.clear()
        item.show()
        basic.pause(d)
        item.clear()
        item.show()
    }
})
let item: neopixel.Strip = null
function showCircle4(c: NeoPixelColors) {
    item.clear()
    addCircle4(c)
    item.show()
}
function showCircle3(c: NeoPixelColors) {
    item.clear()
    addCircle3(c)
    item.show()
}
function addCircle4(c: NeoPixelColors) {
    item.setMatrixColor(2, 0, neopixel.colors(c))
    item.setMatrixColor(3, 0, neopixel.colors(c))
    item.setMatrixColor(4, 0, neopixel.colors(c))
    item.setMatrixColor(5, 0, neopixel.colors(c))
    item.setMatrixColor(2, 7, neopixel.colors(c))
    item.setMatrixColor(3, 7, neopixel.colors(c))
    item.setMatrixColor(4, 7, neopixel.colors(c))
    item.setMatrixColor(5, 7, neopixel.colors(c))
    item.setMatrixColor(0, 2, neopixel.colors(c))
    item.setMatrixColor(0, 3, neopixel.colors(c))
    item.setMatrixColor(0, 4, neopixel.colors(c))
    item.setMatrixColor(0, 5, neopixel.colors(c))
    item.setMatrixColor(7, 2, neopixel.colors(c))
    item.setMatrixColor(7, 3, neopixel.colors(c))
    item.setMatrixColor(7, 4, neopixel.colors(c))
    item.setMatrixColor(7, 5, neopixel.colors(c))
    item.setMatrixColor(1, 1, neopixel.colors(c))
    item.setMatrixColor(1, 6, neopixel.colors(c))
    item.setMatrixColor(6, 1, neopixel.colors(c))
    item.setMatrixColor(6, 6, neopixel.colors(c))
}
function addCircle3(c: NeoPixelColors) {
    item.setMatrixColor(3, 1, neopixel.colors(c))
    item.setMatrixColor(4, 1, neopixel.colors(c))
    item.setMatrixColor(3, 6, neopixel.colors(c))
    item.setMatrixColor(4, 6, neopixel.colors(c))
    item.setMatrixColor(1, 3, neopixel.colors(c))
    item.setMatrixColor(1, 4, neopixel.colors(c))
    item.setMatrixColor(6, 3, neopixel.colors(c))
    item.setMatrixColor(6, 4, neopixel.colors(c))
    item.setMatrixColor(2, 2, neopixel.colors(c))
    item.setMatrixColor(5, 5, neopixel.colors(c))
    item.setMatrixColor(2, 5, neopixel.colors(c))
    item.setMatrixColor(5, 2, neopixel.colors(c))
}
function showCircle1(c: NeoPixelColors) {
    item.clear()
    addCircle1(c)
    item.show()
}
function addCircle1(c: NeoPixelColors) {
    item.setMatrixColor(3, 3, neopixel.colors(c))
    item.setMatrixColor(4, 3, neopixel.colors(c))
    item.setMatrixColor(3, 4, neopixel.colors(c))
    item.setMatrixColor(4, 4, neopixel.colors(c))
}
function showCircle2(c: NeoPixelColors) {
    item.clear()
    addCircle2(c)
    item.show()
}
function addCircle2(c: NeoPixelColors) {
    item.setMatrixColor(3, 2, neopixel.colors(c))
    item.setMatrixColor(4, 2, neopixel.colors(c))
    item.setMatrixColor(3, 5, neopixel.colors(c))
    item.setMatrixColor(4, 5, neopixel.colors(c))
    item.setMatrixColor(2, 3, neopixel.colors(c))
    item.setMatrixColor(2, 4, neopixel.colors(c))
    item.setMatrixColor(5, 3, neopixel.colors(c))
    item.setMatrixColor(5, 4, neopixel.colors(c))
}
item = neopixel.create(DigitalPin.P0, 64, NeoPixelMode.RGB)
item.setMatrixWidth(8)
item.setBrightness(170)
item.showColor(neopixel.colors(NeoPixelColors.Green))
basic.pause(500)
item.clear()
item.show()
