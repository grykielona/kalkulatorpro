import { Box, Typography } from '@mui/material'
import React from 'react'
import { steelPipesDiameters } from '../../helpers/pipes'
import CustomModal from '../CustomModal/CustomModal'
import PipeList from '../Informations/PipeList'

const GasInfo = () => (
  <Box sx={{ my: { xs: 2, md: 4 }, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
    <CustomModal label="TYPOSZEREGI" title="Typoszeregi rur">
      <PipeList header="Rury stalowe - DN | Dw" pipeObject={steelPipesDiameters} />
    </CustomModal>
    <CustomModal maxWidth="md" label="POMOC" title="Instrukcja">
      <Typography mb={2}>
        Wprowadź przepływ w m3/h lub moc w kW aby program automatycznie dobrał średnicę rur i
        policzył spadek jednostkowy.
      </Typography>
      <Typography mb={2}>
        W przypadku urządzeń o bardzo niskiej sprawności należy posługiwać się przepływem.
      </Typography>
      <Typography mb={2}>
        Przeliczenie z mocy na przepływ odbywa się z uwzględnieniem sprawności typowych kotłów
        gazowych.
      </Typography>
      <Typography mb={2}>
        Pole przepływ w m3/h lub mocy w kW można wypełniać wedle uznania. Po wpisaniu jednej
        wartości, druga wartość zostanie automatycznie przeliczona.
      </Typography>
      <Typography mb={2}>
        Podane dobory powinny zostać przeanalizowane przez projektanta i dostosowane odpowiednio do
        danej sytuacji projektowej.
      </Typography>
      <Typography mb={2}>
        W przypadku długich i skomplikowanych instalacji warto rozważyć zastosowanie mniejszych
        średnic.
      </Typography>
    </CustomModal>
    <CustomModal maxWidth="md" label="WIEDZA" title="Wiedza">
      <Typography mb={2}>
        Wzrost ciśnienia gazu ziemnego w odcinku pionowym przy wznoszeniu o 1,0 m wynosi 5,4Pa
      </Typography>
      <Typography mb={2}>Dobór rur na podstawie kryterium prędkości 6 m/s.</Typography>
      <Typography mb={0.5}>
        Zgodnie z rozp. &ldquo;w sprawie warunków technicznych, jakim powinny odpowiadać sieci
        gazowe i ich usytuowanie&ldquo; sieci gazowe dzielą się na:
        <ul>
          <li>niskie ciśn. - do 10 kPa (0,1 bar) włącznie</li>
          <li>średnie ciśn. - pow. 10 kPa (0,1 bar) do 500 kPa (5 bar) włącznie</li>
          <li>podw. średnie ciśn. - pow. 500 kPa (5 bar) do 1,6 MPa (16 bar) włącznie</li>
          <li>wyoskie ciśn. - powyżej 1,6 MPa (16 bar)</li>
        </ul>
      </Typography>
      <Typography mb={2}>
        Wymagane ciśnienie gazu dla typowych urządzeń gazowych wynosi 1,6 - 2,5 kPa (16 mbar - 25
        mbar)
      </Typography>
    </CustomModal>
  </Box>
)

export default GasInfo
