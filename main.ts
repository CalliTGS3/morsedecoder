let p = 0
let dauerAus = 0
let beginnAus = false
let zuletztAus = 0
let dauerAn = 0
let zuletztAn = 0
let signalAn = false
let alleZeichen = "**ETIANMSURWDKGOHVF*L*PJBXCYZQ**"
let schwelleLang = 400
let neuerBuchstabe = 800
basic.forever(function () {
    signalAn = input.lightLevel() > 127
    if (signalAn) {
        zuletztAn = input.runningTime()
        dauerAn = zuletztAn - zuletztAus
        beginnAus = true
    } else {
        zuletztAus = input.runningTime()
        dauerAus = zuletztAus - zuletztAn
        if (beginnAus) {
            beginnAus = false
            if (dauerAn > schwelleLang) {
                p = 2 * p + 1
            } else {
                p = 2 * p
            }
        }
        if (dauerAus > neuerBuchstabe) {
            if (p > 1) {
                basic.showString(alleZeichen.charAt(p))
                basic.pause(1000)
                basic.clearScreen()
            }
            p = 1
        }
    }
})
