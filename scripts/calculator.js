class Calculator {

    add(num1, num2) {
        return num1 + num2
    }

    sub(num1, num2) {
        return num1 - num2;
    }

    mul(num1, num2) {
        return num1 * num2;
    }

    div(num1, num2) {
        if(num2 === 0) {
            return "cannot divide by 0";
        }
        else {
            return num1 / num2;
        }
    }
}

module.exports = Calculator;