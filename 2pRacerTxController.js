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
radio.setGroup(21)
if (input.buttonIsPressed(Button.B)) {
    basic.showString("P0:start btn,P1,2:move btns", 50)
}
basic.showString("txch21 ctrl race2p", 50)
