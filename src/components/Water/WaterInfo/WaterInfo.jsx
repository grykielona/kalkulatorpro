import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import React from 'react'
import CustomModal from '../../CustomModal/CustomModal'
import PipeListContainer from '../../Informations/PipeListContainer'

const WaterInfo = () => (
  <Box sx={{ my: { xs: 2, md: 4 }, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
    <CustomModal label="TYPOSZEREGI" title="Typoszeregi rur">
      <PipeListContainer />
    </CustomModal>
    <CustomModal maxWidth="md" label="POMOC" title="Instrukcja">
      <Typography mb={2}>
        Wprowadź ilość przyborów sanitarnych, ewentualnie zmień rodzaj budynku, rodzaj rur lub zmień
        kryterium prędkości - program sam obliczy przepływy i dobierze średnicę rury
      </Typography>
      <Typography mb={2}>Dobór średnic obliczany jest na podstawie kryterium prędkości</Typography>
      <Typography mb={2}>
        Po wybraniu ilości przyborów można skopiować wiersz i dodać kolejne przybory
      </Typography>
      <Typography mb={2}>
        Dla zaworu czerpalnego należy skorzystać z pola pisuar (te same wypływy normatywne)
      </Typography>
      <Typography mb={2}>
        Dobór średnic na podstawie własnego przepływu można wykonać w zakładce ogrzewanie
      </Typography>
      <Typography mb={2}>
        Podane dobory powinny zostać przeanalizowane przez projektanta i dostosowane odpowiednio do
        danej sytuacji projektowej.
      </Typography>
    </CustomModal>
    <CustomModal maxWidth="md" label="WIEDZA" title="Wiedza">
      <Typography mb={1} variant="h6">
        Wypływy normatywne
      </Typography>
      <Typography>
        <ul>
          <li>Umywalka - 0,07 dm3/s</li>
          <li>Zlewozmywak - 0,07 dm3/s</li>
          <li>Płuczka zbiornikowa - 0,13 dm3/s</li>
          <li>Wanna - 0,15 dm3/s</li>
          <li>Natrysk - 0,15 dm3/s</li>
          <li>Pralka - 0,25 dm3/s</li>
          <li>Zmywarka - 0,15 dm3/s</li>
          <li>Pisuar / Zawór czerpalny - 0,3 dm3/s</li>
        </ul>
      </Typography>
      <Typography mb={1} variant="h6">
        Prędkości przepływu
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 280 }}>
          <TableHead>
            <TableRow>
              <TableCell>Rodzaj przewodu</TableCell>
              <TableCell align="right">PN-92/B-01706 [m/s]</TableCell>
              <TableCell align="right">DIN 1988 [m/s]</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                Połączenia od pionu do punktów czerp.
              </TableCell>
              <TableCell align="right">1,5</TableCell>
              <TableCell align="right">2,0</TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                Piony w instalacjach wodociągowych
              </TableCell>
              <TableCell align="right">1,5</TableCell>
              <TableCell align="right">2,0</TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                Przewody rozdzielcze
              </TableCell>
              <TableCell align="right">1,0</TableCell>
              <TableCell align="right">1,5</TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                Połączenia wodociągowe
              </TableCell>
              <TableCell align="right">1,0</TableCell>
              <TableCell align="right">1,5</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </CustomModal>
  </Box>
)

export default WaterInfo
