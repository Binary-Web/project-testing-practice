const reverseString = require('../scripts/reverseString');

test('reverse "this is my life"', () => {
    expect(reverseString("this is my life")).toBe("efil ym si siht");
})

test('reverse "testing"', () => {
    expect(reverseString("testing")).toBe("gnitset");
})

test('reverse "hello world"', () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
})