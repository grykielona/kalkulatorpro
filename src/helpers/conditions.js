export const shouldCalculateInputs = (...args) =>
  !args.some((arg) => arg === '' || arg === '0' || arg === 0)

export const transformInpt = (input) => (input === '' ? '' : Number(input))
