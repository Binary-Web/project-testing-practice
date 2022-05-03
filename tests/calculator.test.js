const Calculator = require('../scripts/calculator');

describe("calculator basic operations", () => {
    let calculator
    beforeEach(() => {
        calculator = new Calculator();
    });

    test('1 + 2', () => {
        expect(calculator.add(1, 2)).toBe(3);
    });
    
    test('5 / 0', () => {
        expect(calculator.div(5, 0)).toBe("cannot divide by 0")
    });
    
    test('5-5', () => {
        expect(calculator.sub(5, 5)).toBe(0);
    })

    test('9*9', () => {
        expect(calculator.mul(9, 9)).toBe(81);
    })
})
