radio.onReceivedNumber(function (receivedNumber) {
    // It's me
    if (receivedNumber == 1) {
        // Turn on the led
        pins.digitalWritePin(DigitalPin.P0, 1)
        Final = false
        while (!(Final)) {
        	
        }
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (Math.abs(control.eventTimestamp())))
})
let Final = false
radio.setGroup(1)
let MyNode = 1
basic.forever(function () {
	
})
