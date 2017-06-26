const clipd = require('../dist/clipd')

test('should export function', () => {
  expect(clipd).toBeDefined()
  expect(typeof clipd).toBe('function')
})
