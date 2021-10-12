radio.onReceivedNumber(function (receivedNumber) {
    // It's me
    if (receivedNumber == 1) {
        // Turn on the led
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (Math.abs(control.eventTimestamp())))
})
radio.setGroup(1)
let MyNode = 1
basic.forever(function () {
	
})
