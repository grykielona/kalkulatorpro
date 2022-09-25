import { Container, Grid, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import AuthValveCalc from '../components/AuthValveCalc/AuthValveCalc'
import HeatingCalc from '../components/HeatingCalc/HeatingCalc'
import HeatingInfo from '../components/HeatingInfo/HeatingInfo'
import HeatStreamCalc from '../components/HeatStreamCalc/HeatStreamCalc'
import CustomTabsNav from '../components/Tabs/CustomTabsNav'
import TabPanel from '../components/Tabs/TabPanel'

const tabs = [
  { label: 'Przewody', component: <HeatingCalc /> },
  { label: 'Autorytet zaworu', component: <AuthValveCalc /> },
  { label: 'Strumień ciepła', component: <HeatStreamCalc /> },
]

const HeatingPage = () => {
  const [tabIdx, setTabIdx] = useState(0)

  // @ts-ignore
  const matches = useMediaQuery((theme) => theme.breakpoints.up('md'))
  const tabNavOrientation = matches ? 'vertical' : 'horizontal'
  return (
    <Container sx={{ mt: 2, px: 1 }} maxWidth="md">
      <Grid container spacing={2}>
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
          <HeatingInfo />
        </Grid>
      </Grid>
    </Container>
  )
}

export default HeatingPage
