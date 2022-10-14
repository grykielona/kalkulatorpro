import { Grid } from '@mui/material'
import React from 'react'
import {
  pexPipesDiameters,
  ppPipesDiametersPN16,
  ppPipesDiametersPN20,
  steelPipesDiameters,
} from '../../helpers/pipes'
import PipeList from './PipeList'

const PipeListContainer = () => (
  <Grid container>
    <Grid item xs={12} sm={6}>
      <PipeList header="Rury stalowe - DN | Dw" pipeObject={steelPipesDiameters} />
    </Grid>
    <Grid item xs={12} sm={6}>
      <PipeList header="Rury PP PN20 Dz x g | Dw" pipeObject={ppPipesDiametersPN20} />
    </Grid>
    <Grid item xs={12} sm={6}>
      <PipeList header="Rury PP PN16 Dz x g | Dw" pipeObject={ppPipesDiametersPN16} />
    </Grid>
    <Grid item xs={12} sm={6}>
      <PipeList header="Rury Pex Dz x g | Dw" pipeObject={pexPipesDiameters} />
    </Grid>
  </Grid>
)

export default PipeListContainer
