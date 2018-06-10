let nextTestMsgIx = 0
let msgNums: number[] = []
let musicOn = 0
let msg = 0
function processMsg()  {
    if (msg == 0) {
        music.beginMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    } else if (msg == 10) {
        music.playTone(523, music.beat(BeatFraction.Quarter))
    } else if (msg == 11) {
        music.playTone(523, music.beat(BeatFraction.Quarter))
    } else if (msg == 12) {
        music.playTone(523, music.beat(BeatFraction.Quarter))
    } else if (msg == 13) {
        music.playTone(659, music.beat(BeatFraction.Whole))
    } else if (msg == 20) {
        if (musicOn == 1) {
            music.beginMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
        }
    } else if (msg == 31) {
        music.beginMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    } else if (msg == 32) {
        music.beginMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    } else {
        basic.showLeds(`
            . # # # .
            # . . . #
            . . # # .
            . . . . .
            . . # . .
            `)
    }
}
input.onButtonPressed(Button.A, () => {
    msg = msgNums[nextTestMsgIx]
    processMsg()
    nextTestMsgIx = (nextTestMsgIx + 1) % msgNums.length
})
radio.onDataPacketReceived( ({ receivedNumber }) =>  {
    msg = receivedNumber
    processMsg()
})
function playStartupSound()  {
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Quarter))
}
musicOn = 1
radio.setGroup(19)
basic.pause(500)
if (input.buttonIsPressed(Button.B)) {
    basic.showString("rx tug-o-war - pin 0 speaker")
}
if (input.buttonIsPressed(Button.A)) {
    musicOn = 0
    basic.showIcon(IconNames.No)
    basic.clearScreen()
}
basic.showLeds(`
    # . # # #
    # . # . #
    # . # # #
    # . . . #
    # . . . #
    `)
basic.showLeds(`
    . . . . .
    # # . . .
    # . # . #
    # . . # .
    # . # . #
    `)
basic.clearScreen()
msgNums = [0, 10, 11, 12, 13, 20, 31, 32]
nextTestMsgIx = 0
playStartupSound()
