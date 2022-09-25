import { Paper, Tab, Tabs } from '@mui/material'
import React from 'react'

const CustomTabsNav = ({ tabItems, tab, setTab, orientation }) => {
  const isHorizontal = orientation === 'horizontal'
  const handleChange = (event, newValue) => {
    setTab(newValue)
  }
  return (
    <Tabs
      sx={{ overflow: 'hidden' }}
      orientation={orientation}
      value={tab}
      onChange={handleChange}
      component={Paper}
      variant={isHorizontal ? 'fullWidth' : 'standard'}
    >
      {tabItems.map((tabItem, idx) => (
        <Tab label={tabItem.label} wrapped id={`${idx}-${tabItem.label}`} key={tabItem.label} />
      ))}
    </Tabs>
  )
}

export default CustomTabsNav
