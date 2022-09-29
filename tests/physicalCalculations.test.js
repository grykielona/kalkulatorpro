import {
  calcArrayOfPressDropLiquid,
  calcLambda,
  calcPressureDrop,
  calcReynolds,
  calcWaterKinVisc,
  getFluidDensity,
  validateTemp,
} from '../src/helpers/physicalCalculations'

describe('physical calcs', () => {
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
      const temp = 80
      const result = calcWaterKinVisc(temp)
      expect(result).toBeCloseTo(3.60651e-7, 9)
    })
    it('should return proper Water kinematic viscosity number another', () => {
      const temp = 10
      const result = calcWaterKinVisc(temp)
      expect(result).toBeCloseTo(1.3176e-6, 9)
    })
  })

  describe('calcReynolds', () => {
    it('should return proper Reynolds number', () => {
      const kinVisc = 1.3176e-6
      const flowSpeed = 0.5
      const diameterInMM = 17.3
      const result = calcReynolds(flowSpeed, diameterInMM, kinVisc)
      expect(result).toBeCloseTo(6564.9, 0)
    })
  })

  describe('calcLambda', () => {
    it('should return proper lambda number', () => {
      const pipeRoughness = 0.15
      const reynolds = 65264
      const diameterInMM = 17.3
      const result = calcLambda(pipeRoughness, reynolds, diameterInMM)
      expect(result).toBeCloseTo(0.0376, 0)
    })
  })

  describe('calcPressureDrop and arrays of pressure drop', () => {
    const pipeRoughness = 0.15
    let flow = 0.5
    const temp = 10
    const specificHeat = 4.2
    it('should return proper pressure drop', () => {
      const diameterInMM = 17.3
      const result = calcPressureDrop(pipeRoughness, diameterInMM, flow, temp, specificHeat, true)
      expect(result).toBeCloseTo(432.95, 0)
    })
    it('should return proper pressure drop array given low flow', () => {
      const acceptablePressureDrop = 160
      flow = 0.1
      const results = calcArrayOfPressDropLiquid(
        0.15,
        flow,
        temp,
        specificHeat,
        true,
        acceptablePressureDrop
      )

      expect(results).toHaveLength(3)
    })
    it('should return proper pressure drop array given normal flow', () => {
      const acceptablePressureDrop = 160
      flow = 1
      const results = calcArrayOfPressDropLiquid(
        0.15,
        flow,
        temp,
        specificHeat,
        true,
        acceptablePressureDrop
      )

      expect(results).toHaveLength(5)
      expect(results[0]).toHaveProperty('speed')
      expect(results[0]).toHaveProperty('diameter')
      expect(results[0]).toHaveProperty('pressureDrop')
      expect(results[0]).toHaveProperty('isAboveAcceptable')
    })

    it('should return false given ultra high flow', () => {
      const acceptablePressureDrop = 160
      flow = 1000000
      const results = calcArrayOfPressDropLiquid(
        0.15,
        flow,
        temp,
        specificHeat,
        true,
        acceptablePressureDrop
      )

      expect(results).toBe(false)
    })
  })
})
