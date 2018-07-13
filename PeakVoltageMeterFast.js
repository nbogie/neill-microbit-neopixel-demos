let numSamples = 0
let currentSample = 0
let maxVal = 0
function calcPeakSample()  {
    maxVal = 0
    for (let sample of samples) {
        if (sample > maxVal) {
            maxVal = sample
        }
    }
}
let samples: number[] = []
numSamples = 5
for (let i = 0; i < numSamples; i++) {
    samples.push(0)
}
basic.showIcon(IconNames.EigthNote)
basic.forever(() => {
    if (input.buttonIsPressed(Button.B)) {
        fasterLED.gFastPlotBarGraph(
        maxVal,
        256
        )
    } else {
        fasterLED.gFastPlotBarGraph(
        currentSample,
        256
        )
    }
})
basic.forever(() => {
    currentSample = Math.abs(pins.analogReadPin(AnalogPin.P1) - 512)
    samples.push(currentSample)
    samples.removeAt(0)
calcPeakSample()
})
