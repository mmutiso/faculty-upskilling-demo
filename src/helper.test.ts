import  counter  from './helper'
import { fibonacci } from './helper'

// test the counter function
test('Test - given a value increment by 1', () => {
  expect(counter(0)).toBe(1)
  expect(counter(1)).toBe(2)
  expect(counter(2)).toBe(3)
  expect(counter(3)).toBe(4)
})

// test the fibonacci function
test('Test - generate fibonacci series', () => {

  const result: number[] = fibonacci(11)

  const expected: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

  expect(result.length).toBe(expected.length)
  expect(result[result.length - 1]).toBe(expected[expected.length - 1])
  expect(result[4]).toBe(expected[4])
})

