basic.forever(function () {
    for (let Z = 0; Z <= 8; Z++) {
        for (let Y = 0; Y <= 4; Y++) {
            for (let X = 0; X <= 4; X++) {
                if (X + Y == Z) {
                    led.plot(4 - Y, 4 - X)
                }
            }
            basic.pause(100)
        }
    }
    basic.clearScreen()
})
