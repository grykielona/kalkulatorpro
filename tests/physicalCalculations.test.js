import { getFluidDensity, validateTemp } from '../src/helpers/physicalCalculations'

describe('validate temp', () => {
  it('should return 150 when provided temp over 150', () => {
    const result = validateTemp(151)
    expect(result).toBe(150)
  })
})

describe('getFluidDensity', () => {
  it('fdsfsdf', () => {
    const result = getFluidDensity(4.2, 60)
    expect(result).toBe(2)
  })
})
