/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: scout mosley
 * Created on: Sep 2025
 * This program shows temapture when A button pressed
*/
basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)


// when A button pressed tempature is shown
let Tempature: number

input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString('The Temperature is:' + input.temperature() )
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)

})

