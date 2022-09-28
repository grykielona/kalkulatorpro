import {
  calcWaterKinVisc,
  getFluidDensity,
  validateTemp,
} from '../src/helpers/physicalCalculations'

describe('validate temp', () => {
  it('should return temp=150 when provided temp over 150', () => {
    const result = validateTemp(151)
    expect(result).toBe(150)
  })
  it('should return temp=1 when provided temp less or equal 0', () => {
    const result = validateTemp(0)
    expect(result).toBe(1)
  })
})

describe('getFluidDensity', () => {
  it('should return proper for water', () => {
    const result = getFluidDensity(4.2, 60)
    expect(result).toBeCloseTo(982.7)
  })

  it('should return proper temp for glycol', () => {
    const result = getFluidDensity(3.63, 60)
    expect(result).toBe(1052)
  })
})

describe('calcWaterKinVisc', () => {
  it('should return proper Water kinematic viscosity number', () => {
    const temp = 50
    const result = calcWaterKinVisc(temp)
    expect(result).toBeCloseTo(5.598636e-7, 0)
  })
  // it('should return proper Water kinematic viscosity number another', () => {
  //   const temp = 80
  //   const result = calcWaterKinVisc(temp)
  //   expect(result).toBeCloseTo(2)
  // })
})
