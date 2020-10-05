let Distance_to_object = 0
let strip2 = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip2.clear()
basic.forever(function () {
    Distance_to_object = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    basic.showString("" + (Distance_to_object))
    if (Distance_to_object > 4) {
        strip2.showColor(neopixel.colors(NeoPixelColors.Green))
        strip2.show()
        strip2.clear()
        basic.pause(2000)
    }
    if (Distance_to_object <= 4) {
        strip2.showColor(neopixel.colors(NeoPixelColors.Blue))
        strip2.show()
        strip2.clear()
        basic.pause(2000)
    }
    if (Distance_to_object <= 1) {
        strip2.showColor(neopixel.colors(NeoPixelColors.Red))
        strip2.show()
        strip2.clear()
        basic.pause(2000)
    }
})
