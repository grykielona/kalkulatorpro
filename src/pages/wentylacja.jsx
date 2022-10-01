import { Container, Grid, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import CustomTabsNav from '../components/Tabs/CustomTabsNav'
import TabPanel from '../components/Tabs/TabPanel'
import RecuCalc from '../components/Vent/RecuCalc/RecuCalc'
import VentCalc from '../components/Vent/VentCalc/VentCalc'
import VentInfo from '../components/Vent/VentInfo/VentInfo'

const tabs = [
  { label: 'Przewody', component: <VentCalc /> },
  { label: 'Odzysk ciepła', component: <RecuCalc /> },
]

const VentPage = () => {
  const [tabIdx, setTabIdx] = useState(0)
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const tabNavOrientation = matches ? 'vertical' : 'horizontal'

  return (
    <Container sx={{ mt: 2, px: 1 }} maxWidth="md">
      <Grid container spacing={1}>
        <Grid item xs={12} md={2}>
          <CustomTabsNav
            orientation={tabNavOrientation}
            tab={tabIdx}
            setTab={setTabIdx}
            tabItems={tabs}
          />
        </Grid>
        <Grid item xs={12} md={10}>
          {tabs.map((tab, idx) => (
            <TabPanel key={tab.label} index={idx} value={tabIdx}>
              {tab.component}
            </TabPanel>
          ))}
          <VentInfo />
        </Grid>
      </Grid>
    </Container>
  )
}

export default VentPage
