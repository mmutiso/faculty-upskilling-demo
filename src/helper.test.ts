// test various scenarios for the helper function
import counter from './helper'

test('Test - given a value increment by 1', () => {
  expect(counter(0)).toBe(1)
  expect(counter(1)).toBe(2)
  expect(counter(2)).toBe(3)
  expect(counter(3)).toBe(4)
})


