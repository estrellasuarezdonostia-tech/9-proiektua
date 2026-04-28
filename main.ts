let time = 0
let start = 0
input.onLogoEvent(TouchButtonEvent.Released, function () {
    time = input.runningTime() - start
    basic.showIcon(IconNames.Heart)
    basic.showNumber(time - 0)
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    start = input.runningTime()
    basic.showIcon(IconNames.Heart)
})
