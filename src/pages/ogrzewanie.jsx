import { Container, Grid, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import AuthValveCalc from '../components/Heating/AuthValveCalc/AuthValveCalc'
import HeatingCalc from '../components/Heating/HeatingCalc/HeatingCalc'
import HeatingInfo from '../components/Heating/HeatingInfo/HeatingInfo'
import CustomTabsNav from '../components/Tabs/CustomTabsNav'
import TabPanel from '../components/Tabs/TabPanel'

const tabs = [
  { label: 'Przewody', component: <HeatingCalc /> },
  { label: 'Autorytet zaworu', component: <AuthValveCalc /> },
]

const HeatingPage = () => {
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
          <HeatingInfo />
        </Grid>
      </Grid>
    </Container>
  )
}

export default HeatingPage
