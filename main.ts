input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # . # #
        # # # # #
        # . . . #
        `)
    modus = 1
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # #
        # # . . .
        # # # # #
        . . . # #
        # # # # #
        `)
    modus = 2
})
let feuchte = 0
let modus = 0
serialmp3.connectSerialMp3(DigitalPin.C16, DigitalPin.C17)
modus = 0
basic.forever(function () {
    feuchte = pins.map(
    pins.analogReadPin(AnalogPin.P1),
    0,
    1023,
    0,
    100
    )
    if (modus == 0) {
        basic.showNumber(feuchte)
    } else {
        if (feuchte < 30) {
            if (pins.digitalReadPin(DigitalPin.P0) == 1) {
                if (modus == 1) {
                    basic.setLedColor(0xff0000)
                    music.playTone(262, music.beat(BeatFraction.Whole))
                    music.playTone(349, music.beat(BeatFraction.Half))
                    basic.setLedColor(0x000000)
                } else {
                    basic.setLedColor(0xff0000)
                    serialmp3.playMp3Track(randint(1, 12), 1)
                    basic.pause(1000)
                    basic.setLedColor(0x000000)
                }
            }
        }
    }
})
