let musicOn = 0
let nextTestMsgIx = 0
let msgNums: number[] = []
radio.onDataPacketReceived(({ receivedNumber }) => {
    msg = receivedNumber
    processMsg()
    toggleMarkerPixel()
})
function toggleMarkerPixel() {
    led.toggle(4, 0)
}
function playStartupSound() {
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(784, music.beat(BeatFraction.Quarter))
    music.playTone(784, music.beat(BeatFraction.Quarter))
}
function processMsg() {
    if (msg == 0) {
        music.beginMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    } else if (msg == 1) {
        music.playTone(349, music.beat(BeatFraction.Sixteenth))
    } else if (msg == 2) {
        music.playTone(440, music.beat(BeatFraction.Sixteenth))
    } else if (msg == 5) {
        basic.showString("pick colour", 40)
    } else if (msg == 10) {
        music.playTone(196, music.beat(BeatFraction.Sixteenth))
    } else if (msg == 11) {
        music.playTone(523, music.beat(BeatFraction.Eighth))
    } else if (msg == 12) {
        music.playTone(523, music.beat(BeatFraction.Eighth))
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
    } else if (msg == 130) {
        //start game pressed
    } else if (msg == 101) {
        //a controller pressed p1 button
    } else if (msg == 102) {
        //a controller pressed p2 button
    } else if (msg == 111) {
        //a controller pressed start-p1-colour-cycling
    } else if (msg == 112) {
        //a controller pressed start-p2-colour-cycling
    } else if (msg == 121) {
        //a controller pressed stop-p1-colour-cycling
    } else if (msg == 122) {
        //a controller pressed stop-p2-colour-cycling
    } else if (msg == 201) {
        music.playTone(185, music.beat(BeatFraction.Sixteenth))
        music.playTone(131, music.beat(BeatFraction.Quarter))
    } else if (msg == 201) {
        music.playTone(185, music.beat(BeatFraction.Sixteenth))
        music.playTone(131, music.beat(BeatFraction.Quarter))
    } else if (msg == 202) {
        music.playTone(196, music.beat(BeatFraction.Sixteenth))
        music.playTone(139, music.beat(BeatFraction.Quarter))
    } else {
        basic.showLeds(`
            . # # # .
            # . . . #
            . . # # .
            . . . . .
            . . # . .
            `)
        basic.showNumber(msg, 50)
        basic.clearScreen()
    }
}
input.onButtonPressed(Button.B, () => {
    msg = msgNums[nextTestMsgIx]
    processMsg()
    nextTestMsgIx = (nextTestMsgIx + 1) % msgNums.length
})
let version = ""
let msg = 0
version = "-"
musicOn = 1
radio.setGroup(21)
basic.pause(500)
version = "1.7"
if (input.buttonIsPressed(Button.B)) {
    basic.showString("race rx:pin0 snd. v" + version, 50)
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
msgNums = [1, 2, 1, 2, 1, 2, 0, 10, 11, 12, 13, 20, 31, 32]
nextTestMsgIx = 0
