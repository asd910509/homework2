basic.forever(function () {
    for (let X = 0; X <= 8; X++) {
        for (let Y = 0; Y <= 4; Y++) {
            led.plot(4 - Y, 4 - (X - Y))
            basic.pause(100)
        }
    }
    basic.clearScreen()
})
