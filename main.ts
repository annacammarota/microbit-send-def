let DIRECTION = 0
let SPEED = 0
radio.setGroup(5)
basic.showLeds(`
    . . # # .
    . # . . .
    . . # . .
    . . . # .
    . # # . .
    `)
basic.forever(function () {
    SPEED = input.rotation(Rotation.Pitch)
    radio.sendNumber(SPEED)
})
basic.forever(function () {
    DIRECTION = input.compassHeading()
    radio.sendValue("direction", DIRECTION)
})
