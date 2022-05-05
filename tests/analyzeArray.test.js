const analyzeArray = require('../scripts/analyzeArray');

test('analyze[5, 4, 1, 3, 2]', () => {
    expect(analyzeArray([5, 4, 1, 3, 2])).toStrictEqual({
        min: 1,
        max: 5,
        ave: 3,
        length: 5
    })
})

test('analyze[1,8,3,4,2,6]', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        min: 1,
        max: 8,
        ave: 4,
        length: 6
    })
})

test('analyze[10, 5, 7, 4, 13, 11, 9]', () => {
    expect(analyzeArray([10, 5, 7, 4, 13, 11, 9])).toStrictEqual({
        min: 4,
        max: 13,
        ave: 8,
        length: 7
    })
})