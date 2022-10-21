import { Box, Typography } from '@mui/material'
import React from 'react'
import { spiro } from '../../../helpers/pipes'
import CustomModal from '../../CustomModal/CustomModal'
import PipeList from '../../Informations/PipeList'

const VentInfo = () => (
  <Box sx={{ my: { xs: 2, md: 4 }, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
    <CustomModal label="TYPOSZEREGI" title="Typoszeregi rur">
      <PipeList header="Kanały Spiro" pipeObject={spiro} />
    </CustomModal>
    <CustomModal maxWidth="md" label="POMOC" title="Instrukcja">
      <Typography variant="body1" mb={2}>
        Kanały wentylacyjne dobierane są w oparciu o kryterium prędkości.
      </Typography>
      <Typography variant="body1" mb={2}>
        Opór jednostkowy w Pa/m obliczany jest na podstawie wzoru Darcy-Weisbecha. Przyjęto
        chropowatość bezwględną dla stali ocynkowanej.
      </Typography>
      <Typography variant="body1" mb={2}>
        Podane dobory powinny zostać przeanalizowane przez projektanta i dostosowane odpowiednio do
        danej sytuacji projektowej.
      </Typography>
    </CustomModal>
    <CustomModal maxWidth="md" label="WIEDZA" title="Wiedza">
      <Typography variant="body1" mb={2}>
        Kryterium prędkość dla doboru kanałów wynosi 5,5 m/s
      </Typography>
      <Typography variant="body1" mb={2}>
        Zalecana prędkość powietrza przy czerpni nie więcej niż 2,5 m/s
      </Typography>
      <Typography variant="body1" mb={2}>
        Zalecana prędkość powietrza przy wyrzutni nie więcej niż 4,0 m/s
      </Typography>
      <Typography variant="body1" mb={2}>
        W przypadku kanałów w obiektach przemysłowych prędkości powietrza w kanałach mogą być
        większe, rzędu 6-10 m/s
      </Typography>
      <Typography variant="body1" mb={2}>
        Dla kanałów przy nawiewnikach zaleca się prędkości mniejsze 3-4 m/s
      </Typography>
    </CustomModal>
  </Box>
)

export default VentInfo
