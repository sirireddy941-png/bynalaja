let Number2 = 0
input.onButtonPressed(Button.A, function () {
    Number2 = randint(0, 10)
    basic.showNumber(Number2)
})
input.onButtonPressed(Button.B, function () {
    if (Number2 % 2 == 0) {
        basic.showString("Even")
    } else {
        basic.showString("Odd")
    }
})
