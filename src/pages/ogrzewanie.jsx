import { Box, Container, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomSelectField from '../components/Inputs/CustomSelectField'
import CustomTextField from '../components/Inputs/CustomTextField'

const paperSX = { px: 1, py: 2, mb: 2 }
const sectionBoxSX = { mt: 2, display: 'flex', gap: 1 }
const typograhySX = { mb: 2, textTransform: 'uppercase' }

const testMenuItem = [
  { itemValue: 10, itemLabel: 'ten' },
  { itemValue: 20, itemLabel: 'twenty' },
  { itemValue: 30, itemLabel: 'thirty' },
]

const HeatingPage = () => {
  const [temp, setTemp] = useState(80)
  const [power, setPower] = useState(null)
  const [deltaTemp, setDeltaTemp] = useState(null)
  const [flowCMPH, setFlowCMPH] = useState(null)
  const [flowCDPS, setFlowCDPS] = useState(null)

  return (
    <Container sx={{ mt: 2 }} maxWidth="md">
      <Paper elevation={2} sx={paperSX}>
        <Typography sx={typograhySX}>Dane wejściowe</Typography>
        <Box sx={sectionBoxSX}>
          <CustomSelectField
            label="Rodzaj czynnika"
            labelId="test1"
            menuItem={testMenuItem}
            width="60%"
            onChange={(e) => {
              console.log(e)
            }}
          />
          <CustomTextField
            label="Temp. czynnika °C"
            value={temp}
            onChange={(val) => setTemp(val)}
            width="40%"
          />
        </Box>
        <Box sx={sectionBoxSX}>
          <CustomSelectField
            label="Rodzaj czynnika"
            labelId="test1"
            menuItem={testMenuItem}
            width="60%"
            onChange={(e) => {
              console.log(e)
            }}
          />
        </Box>
      </Paper>

      <Paper elevation={2} sx={paperSX}>
        <Typography sx={typograhySX}>Dobór na podstawie mocy</Typography>
        <Box sx={sectionBoxSX}>
          {/* <CustomTextField width="50%" label="Różnica temp. °C" />
          <CustomTextField width="50%" label="Moc kW" /> */}
        </Box>
      </Paper>

      <Paper elevation={2} sx={paperSX}>
        <Typography sx={typograhySX}>Dobór na podstawie przepływu</Typography>
        <Box sx={sectionBoxSX}>
          {/* <CustomTextField width="50%" label="Przepływ m3/h" />
          <CustomTextField width="50%" label="Przepływ dm3/s" /> */}
        </Box>
      </Paper>
    </Container>
  )
}

export default HeatingPage
