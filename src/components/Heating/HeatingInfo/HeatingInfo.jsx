import { Box } from '@mui/material'
import React from 'react'
import CustomModal from '../../CustomModal/CustomModal'

const HeatingInfo = () => (
  <Box sx={{ my: { xs: 2, md: 4 }, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
    <CustomModal label="TYPOSZEREGI" title="Typoszeregi rur">
      <div>AAAAAAA AAAAAAAA</div>
    </CustomModal>
    <CustomModal label="POMOC" title="Typoszeregi rur">
      <div>
        <p>Pomoc</p>
      </div>
    </CustomModal>
    <CustomModal label="WIEDZA" title="Typoszeregi rur">
      <div>
        <p>Wiedz</p>
      </div>
    </CustomModal>
  </Box>
)

export default HeatingInfo
