const { sum, data, n, z, floatingValue, shoppingList, compileAndroidCode } = require("./sum")

//.toBe test exact equality.
test("add 1+3 to equal 3", () => {
  expect(sum(1, 2)).toBe(3)
})

test("2+2=4", () => {
  expect(sum(2, 2)).toBe(4)
  expect(sum(2, 3)).toEqual(5)
})

//.toEqual recursively checks every field of an object or array.
test("object assignment", () => {
  expect(data).toEqual({ one: 1, two: 2 })
})

test("adding positive numbers is not zero", () => {
  for (let i = 0; i < 10; i++) {
    for (let b = 1; b < 10; b++) {
      expect(sum(i, b)).not.toBe(0)
    }
  }
})

test("null", () => {
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

test("zero", () => {
  // expect(z).toBeUndefined()
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})

test("test sum 2+2", () => {
  expect(sum(2, 2)).toBeGreaterThan(3)
  expect(sum(2, 2)).toBeGreaterThanOrEqual(3.5)
  expect(sum(2, 2)).toBeLessThan(5)

  // toBe and toEqual are equivalent for numbers
  expect(sum(2, 2)).toBe(4)
  expect(sum(2, 2)).toEqual(4)
})

test("adding floating point numbers", () => {
  // This won't work because of rounding error
  // expect(floatingValue).toBe(0.3)

  expect(floatingValue).toBeCloseTo(0.3) // This works.
})

//String
//check strings against regular expressions with toMatch
test("there is no I in team", () => {
  expect("team").not.toMatch(/I/)
})

test("there is stop in Christoph", () => {
  expect("Christoph").toMatch(/stop/)
})

//Arrays and iterables
test("the shopping list has beer in it", () => {
  expect(shoppingList).toContain("beer")
  expect(new Set(shoppingList)).toContain("paper towels")
})

//Exceptions
// If you want to test whether a particular function throws an error when it's called, use .toThrow
test("compiling android goes as expected", () => {
  expect(() => compileAndroidCode()).toThrow("you are using the wrong JDK")
  expect(() => compileAndroidCode()).toThrow(/JDK/)
})