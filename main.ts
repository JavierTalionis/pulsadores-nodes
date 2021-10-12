radio.onReceivedNumber(function (receivedNumber) {
    // It's me
    if (receivedNumber == 1) {
        // Turn on the led
        pins.digitalWritePin(DigitalPin.P0, 1)
        Final = false
        while (!(Final)) {
            let timer = 0
            // Push the button. Final=OK
            if (input.buttonIsPressed(Button.A)) {
                // KO=0
                reply = 1
                Final = true
            }
            // If timeout Final=KO
            if (timer > 10000) {
                // KO=0
                reply = 0
                Final = true
            }
        }
        radio.sendValue("Node1", reply)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (Math.abs(control.eventTimestamp())))
})
let reply = 0
let Final = false
radio.setGroup(1)
let MyNode = 1
basic.forever(function () {
	
})
