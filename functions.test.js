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