import { Box, Container, Grid, Tab, Tabs } from '@mui/material'
import React from 'react'
import HeatingCalc from '../components/HeatingCalc/HeatingCalc'
import TabPanel from '../components/Tabs/TabPanel'

const HeatingPage = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Container sx={{ mt: 2 }} maxWidth="md">
      <Grid container>
        <Grid item xs={2}>
          <Tabs orientation="vertical" value={value} onChange={handleChange}>
            <Tab label="Przewody" id="0" />
            <Tab label="Autorytet zaw." id="1" />
            <Tab label="Strumień ciepła" id="2" />
          </Tabs>
        </Grid>
        <Grid item xs={10}>
          <TabPanel value={value} index={0}>
            <HeatingCalc />
          </TabPanel>
          <TabPanel value={value} index={1}>
            1111
          </TabPanel>
          <TabPanel value={value} index={2}>
            2222
          </TabPanel>
        </Grid>
      </Grid>
    </Container>
  )
}

export default HeatingPage
