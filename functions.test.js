const functions = require('./functions')


//toBe
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


// test('user should be Ethan McNeal object', () => {
//     expect(functions.createUser()).toBe({firstName: 'Ethan', lastName: 'McNeal'})
// }) // fails => want to use toEqual or toStrictEqual

test('user should be Ethan McNeal object', () => {
    expect(functions.createUser()).toStrictEqual({firstName: 'Ethan', lastName: 'McNeal'})
}) // passes


//toBeLessThan or //toBeGreaterThan
test('Sum should be under 1000 but Product should be greater than 1000', () => {
    const load1 = 800;
    const load2 = 150;;
    expect(load1 + load2).toBeLessThan(1000)
    expect(load1 * load2).toBeGreaterThan(1000)
})

//Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i)
})


//toContain
test('Admin should be in userNames', () => {
    const userNames = ['bob', 'joe', 'billy', 'admin'];
    expect(userNames).toContain('admin')
})

//Working with async data

//promise
test('user fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
        .then(data => {
            expect(data.name).toEqual('Leanne Graham')
        })
})

// Async Await

test('user fetched name should be Leanne Graham', async() => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham')
})