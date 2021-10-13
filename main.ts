radio.onReceivedNumber(function (receivedNumber) {
    // It's me
    if (receivedNumber == 1) {
        timer = input.runningTime()
        // Turn on the led
        pins.digitalWritePin(DigitalPin.P0, 1)
        Final = false
        while (!(Final)) {
            // Push the button. Final=OK
            if (input.buttonIsPressed(Button.A)) {
                // KO=0
                reply = 1
                basic.showIcon(IconNames.Yes)
                soundExpression.happy.play()
                Final = true
                basic.clearScreen()
            }
            // If timeout Final=KO
            if (input.runningTime() - timer > 5000) {
                // KO=0
                reply = 0
                basic.showIcon(IconNames.No)
                Final = true
                basic.clearScreen()
            }
        }
        // Turn on the led
        pins.digitalWritePin(DigitalPin.P0, 0)
        radio.sendNumber(reply)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("hi")
    radio.sendNumber(1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Yes)
    timer = input.runningTime()
    while (input.runningTime() - timer < 5000) {
        basic.showNumber(5)
    }
    basic.showIcon(IconNames.No)
})
let reply = 0
let Final = false
let timer = 0
music.setVolume(51)
radio.setGroup(1)
let MyNode = 1
