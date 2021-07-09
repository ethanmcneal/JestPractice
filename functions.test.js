const functions = require('./functions')

test('adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4)
})

test('adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5)
})




//CHECK FOR TRUTHY AND FALSE VALUES
//toBeNull === null
//toBeUndefined === undefined
//toBeDefined !== undefined
//toBeTruthy === anything that an if statement treats as true
//toBeFalsy === anything an if statement treats as false

test('should be Null', () => {
    expect(functions.isNull()).toBeNull()
})

test('null should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy()
})
test('0 should be falsy', () => {
    expect(functions.checkValue(0)).toBeFalsy()
})
test('undefined should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy()
})
test('empty string should be falsy', () => {
    expect(functions.checkValue('')).toBeFalsy()
})
test('empty array should NOT be falsy', () => {
    expect(functions.checkValue([])).not.toBeFalsy()
})
test('empty array should be truthy', () => {
    expect(functions.checkValue([])).toBeTruthy()
})