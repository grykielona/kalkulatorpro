import {
  Box,
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import React from 'react'
import CustomTextField from '../components/Inputs/CustomTextField'

const paperSX = { px: 1, py: 2, mb: 2 }
const sectionBoxSX = { mt: 2, display: 'flex', gap: 1 }
const typograhySX = { mb: 2, textTransform: 'uppercase' }

const HeatingPage = () => (
  <Container sx={{ mt: 2 }} maxWidth="md">
    <Paper elevation={2} sx={paperSX}>
      <Typography sx={typograhySX}>Dane wejściowe</Typography>
      <Box sx={sectionBoxSX}>
        <FormControl sx={{ width: '55%' }}>
          <InputLabel id="demo-simple-select-label">Rodzja czynnika</InputLabel>
          <Select
            size="small"
            labelId="demo-simple-select-label"
            value="s"
            label="Rodzja czynnika"
            onChange={() => {}}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <CustomTextField width="45%" label="Temp. czynnika °C" />
      </Box>
      <Box sx={sectionBoxSX}>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel id="demo-simple-select-label">Rodzaj rury</InputLabel>
          <Select
            size="small"
            labelId="demo-simple-select-label"
            value="s"
            label="Rodzaj rury"
            onChange={() => {}}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Paper>

    <Paper elevation={2} sx={paperSX}>
      <Typography sx={typograhySX}>Dobór na podstawie mocy</Typography>
      <Box sx={sectionBoxSX}>
        <CustomTextField width="50%" label="Moc kW" />
        <CustomTextField width="50%" label="Różnica temp. °C" />
      </Box>
    </Paper>

    <Paper elevation={2} sx={paperSX}>
      <Typography sx={typograhySX}>Dobór na podstawie przepływu</Typography>
      <Box sx={sectionBoxSX}>
        <CustomTextField width="50%" label="Przepływ m3/h" />
        <CustomTextField width="50%" label="Przepływ dm3/s" />
      </Box>
    </Paper>
  </Container>
)

export default HeatingPage
