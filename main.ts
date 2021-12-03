let t = 0
basic.showIcon(IconNames.EigthNote)
basic.forever(function () {
    t = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P2)
    if (t >= 6 && t >= 8) {
        basic.showString("G")
        music.playTone(784, music.beat(BeatFraction.Double))
        basic.pause(1000)
    } else if (t > 8 && t >= 10) {
        basic.showString("C")
        music.playTone(262, music.beat(BeatFraction.Double))
        basic.pause(1000)
    } else if (t > 10 && t >= 12) {
        basic.showString("E")
        music.playTone(330, music.beat(BeatFraction.Double))
        basic.pause(1000)
    } else if (t > 12 && t >= 14) {
        basic.showString("A")
        music.playTone(440, music.beat(BeatFraction.Double))
        basic.pause(1000)
    }
})
