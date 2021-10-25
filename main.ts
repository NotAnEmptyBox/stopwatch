let start = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber((input.runningTime() - start) / 1000)
})
basic.forever(function () {
	
})
