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
samples = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
basic.showIcon(IconNames.EigthNote)
basic.forever(() => {
    samples.push(Math.abs(pins.analogReadPin(AnalogPin.P1) - 512))
    samples.removeAt(0)
calcPeakSample()
})
basic.forever(() => {
    led.plotBarGraph(
    maxVal,
    256
    )
})
