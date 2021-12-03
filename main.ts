let t = 0
basic.showIcon(IconNames.EigthNote)
basic.forever(function () {
    t = sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P1)
    if (t >= 2 && t <= 8) {
        basic.showString("G")
        music.playTone(784, music.beat(BeatFraction.Double))
    } else if (t > 8 && t <= 16) {
        basic.showString("C")
        music.playTone(262, music.beat(BeatFraction.Double))
    } else if (t > 16 && t <= 24) {
        basic.showString("E")
        music.playTone(330, music.beat(BeatFraction.Double))
    } else if (t > 24 && t <= 32) {
        basic.showString("A")
        music.playTone(440, music.beat(BeatFraction.Double))
    }
})
