music.playTone(131, music.beat(BeatFraction.Sixteenth))
basic.forever(function () {
    if (calliBot2.entfernung(C2Einheit.cm) > 30) {
        calliBot2.motor(C2Motor.beide, C2Dir.vorwärts, 50)
    } else {
        calliBot2.motor(C2Motor.rechts, C2Dir.vorwärts, 50)
        calliBot2.motor(C2Motor.links, C2Dir.rückwärts, 50)
    }
})
