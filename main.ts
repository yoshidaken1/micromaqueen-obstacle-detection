let item = false
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 35 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        item = Math.randomBoolean()
        if (item == true) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
            basic.pause(1000)
        }
        if (item == false) {
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            basic.pause(1000)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
})
