import { Box, Container, Grid, Link, List, ListItem, Typography } from '@mui/material'
import { Link as GLink } from 'gatsby'
import React from 'react'
import CustomModal from '../CustomModal/CustomModal'
import Policy from './Policy'

const Footer = () => (
  <Box sx={{ py: 2 }}>
    <Container sx={{ color: 'common.white' }}>
      <Grid container>
        <Grid xs={12} sm={7} item>
          <Typography variant="h6">
            Kalkulator<strong>Pro</strong>
          </Typography>
          <Typography variant="body1">
            Kalkulatory inżynierskie zostały opracowane w oparciu o literature techniczną
          </Typography>
        </Grid>
        <Grid xs={12} sm={5} item>
          <List sx={{ p: 0 }} dense>
            <ListItem sx={{ justifyContent: 'end' }} disableGutters>
              <Link variant="body2" color="inherit" component={GLink} to="/literatura">
                Literatura
              </Link>
            </ListItem>
            <ListItem sx={{ justifyContent: 'end' }} disableGutters>
              <Link variant="body2" target="_blank" href="https://kbmprojekt.pl/" color="inherit">
                KBM Projekt
              </Link>
            </ListItem>
            <ListItem sx={{ justifyContent: 'end' }} disableGutters>
              <CustomModal link title="Polityka prywatności" label="Polityka prywatności">
                <Policy />
              </CustomModal>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Typography variant="body2" sx={{ textAlign: 'center', mt: 2 }}>
        © {new Date().getFullYear()} KBM Projekt
      </Typography>
    </Container>
  </Box>
)

export default Footer
