let numSamples = 0
let currentSample = 0
let maxVal = 0
function calcPeakSample() {
    maxVal = 0
    for (let sample of samples) {
        if (sample > maxVal) {
            maxVal = sample
        }
    }
}
let samples: number[] = []
radio.setGroup(35)
numSamples = 5
for (let i = 0; i < numSamples; i++) {
    samples.push(0)
}
basic.showIcon(IconNames.EigthNote)
basic.forever(function () {
    currentSample = Math.abs(pins.analogReadPin(AnalogPin.P1) - 512)
    samples.push(currentSample)
    samples.removeAt(0)
    calcPeakSample()
    radio.sendNumber(maxVal)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        led.plotBarGraph(
            Math.abs(currentSample),
            256
        )
    } else {
        led.plotBarGraph(
            maxVal,
            256
        )
    }
})
