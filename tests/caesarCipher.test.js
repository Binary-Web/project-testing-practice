const caesarCipher = require('../scripts/caesarCipher');

test('test to 1 shift', () => {
    expect(caesarCipher("test", 5)).toBe("yjxy")
})

test('"abc abc" to 1 shift', () => {
    expect(caesarCipher("abc abc", 10)).toBe("klm klm")
})

test('"abcdefghijklmnopqrstuvwxyz" to 25 shift', () => {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 25)).toBe("zabcdefghijklmnopqrstuvwxy")
})
