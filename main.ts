radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.pause(1000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        for (let index = 0; index < 5; index++) {
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(500)
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(1000)
        radio.sendNumber(0)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
pins.digitalWritePin(DigitalPin.P0, 1)
radio.setGroup(1)
