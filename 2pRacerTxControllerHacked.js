let isHacked = 0
input.onButtonPressed(Button.B, () => {
    radio.sendNumber(102)
})
input.onButtonPressed(Button.A, () => {
    radio.sendNumber(101)
})
input.onGesture(Gesture.Shake, () => {
    radio.sendNumber(130)
})
input.onPinPressed(TouchPin.P2, () => {
    radio.sendNumber(102)
})
input.onPinPressed(TouchPin.P1, () => {
    radio.sendNumber(101)
})
input.onPinPressed(TouchPin.P0, () => {
    radio.sendNumber(130)
})
input.onGesture(Gesture.TiltRight, () => {
    if (isHacked) {
        for (let i = 0; i < 10; i++) {
            radio.sendNumber(102)
            basic.pause(10)
        }
    }
})
input.onGesture(Gesture.TiltLeft, () => {
    if (isHacked) {
        for (let i = 0; i < 10; i++) {
            radio.sendNumber(101)
            basic.pause(10)
        }
    }
})
radio.setGroup(21)
if (input.buttonIsPressed(Button.B)) {
    basic.showString("P0:start btn,P1,2:move btns", 50)
}
if (input.buttonIsPressed(Button.A)) {
    isHacked = 1
    basic.showString("h4x0r3d", 40)
}
basic.showString("txch21 ctrl race2p", 50)
