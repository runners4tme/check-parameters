const allParametersArePresent = require('../lib/checkParameters')
const { goodRequest, badRequest, parameters } = require('./helpers')

describe('allParametersArePresent', () => {
  test('should return true if all the parameters are present', () => {
    expect(allParametersArePresent(goodRequest, parameters)).toBeTruthy()
  })
  test('should return false if all the parameters are not present', () => {
    expect(allParametersArePresent(badRequest, parameters)).toBeFalsy()
  })
})
