radio.onReceivedNumber(function (receivedNumber) {
    // It's me
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Yes)
        timer = input.runningTime()
        // Turn on the led
        pins.digitalWritePin(DigitalPin.P0, 1)
        Final = false
        while (!(Final)) {
            // Push the button. Final=OK
            if (input.buttonIsPressed(Button.A)) {
                // KO=0
                reply = 1
                Final = true
            }
            // If timeout Final=KO
            if (input.runningTime() - timer > 5000) {
                // KO=0
                reply = 0
                Final = true
            }
        }
        // Turn on the led
        pins.digitalWritePin(DigitalPin.P0, 0)
        radio.sendValue("Node1", reply)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Hello!")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Yes)
    timer = input.runningTime()
    while (input.runningTime() - timer < 5000) {
        basic.showNumber(0)
    }
    basic.showIcon(IconNames.No)
})
let reply = 0
let Final = false
let timer = 0
radio.setGroup(1)
let MyNode = 1
