const capitalize = require('../scripts/capitalize');

test('all lowercase except first character', () => {
    expect(capitalize('BeN')).toBe('Ben');
})

test('all lowercase except first character', () => {
    expect(capitalize('ben')).toBe('Ben');
})

test('all lowercase except first character', () => {
    expect(capitalize('ben cRaLo')).toBe('Ben Cralo');
})

test('all lowercase except first character', () => {
    expect(capitalize('TestTing tesTT')).toBe('Testting Testt');
})