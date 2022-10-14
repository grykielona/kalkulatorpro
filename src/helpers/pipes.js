export const steelPipesDiameters = {
  'DN 15': 17.3,
  'DN 20': 22.3,
  'DN 25': 28.5,
  'DN 32': 37.2,
  'DN 40': 43.1,
  'DN 50': 54.5,
  'DN 65': 70.3,
  'DN 80': 82.5,
  'DN 100': 107.1,
  'DN 125': 131.7,
  'DN 150': 159.3,
  'DN 200': 206.5,
  'DN 250': 260.4,
  'DN 300': 309.7,
  'DN 350': 339.6,
  'DN 400': 388.8,
  'DN 450': 437.2,
  'DN 500': 486,
  'DN 600': 595.8,
  'DN 700': 695,
  'DN 800': 795.4,
}

export const ppPipesDiametersPN20 = {
  '16x2,7': 10.6,
  '20x3,4': 13.2,
  '25x4,2': 16.6,
  '32x5,4': 21.2,
  '40x6,7': 26.6,
  '50x8,3': 33.4,
  '63x10,5': 42,
  '75x12,5': 50,
  '90x15': 60,
  '110x18,3': 73.4,
}

export const ppPipesDiametersPN16 = {
  '16x2,2': 11.6,
  '20x2,8': 14.4,
  '25x3,5': 18.0,
  '32x4,4': 23.2,
  '40x5,5': 30.0,
  '50x6,9': 36.2,
  '63x8,6': 45.8,
  '75x10,3': 54.4,
  '90x12,3': 65.4,
  '110x15,1': 79.8,
}

export const pexPipesDiameters = {
  '16x2,0': 12.0,
  '20x2,0': 16.0,
  '25x2,5': 20.0,
  '32x3,0': 26.0,
  '40x3,5': 33.0,
  '50x4,0': 42.0,
  '63x4,5': 54,
}

export const spiroPipes = {
  80: 80,
  100: 100,
  125: 125,
  160: 160,
  200: 200,
  250: 250,
  315: 315,
  355: 355,
  400: 400,
  450: 450,
  500: 500,
  630: 630,
  710: 710,
  800: 800,
  1000: 1000,
  1250: 1250,
}

export const spiro = {
  fi80: '',
  fi100: '',
  fi125: '',
  fi160: '',
  fi200: '',
  fi250: '',
  fi315: '',
  fi355: '',
  fi400: '',
  fi450: '',
  fi500: '',
  fi630: '',
  fi710: '',
  fi800: '',
  fi1000: '',
  fi1250: '',
}
export const arrayOfInternalDiameters = (pipeType) => {
  let type
  if (pipeType === 0.007001) {
    type = ppPipesDiametersPN16
  } else if (pipeType === 0.007002) {
    type = ppPipesDiametersPN20
  } else if (pipeType === 0.007003) {
    type = pexPipesDiameters
  } else {
    type = steelPipesDiameters
  }
  return Object.values(type)
}

export const arrayOfLabelDiameters = (pipeType) => {
  let type
  if (pipeType === 0.007001) {
    type = ppPipesDiametersPN16
  } else if (pipeType === 0.007002) {
    type = ppPipesDiametersPN20
  } else if (pipeType === 0.007003) {
    type = pexPipesDiameters
  } else {
    type = steelPipesDiameters
  }
  return Object.keys(type)
}
