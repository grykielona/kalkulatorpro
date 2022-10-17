import { Box, Container, Divider, Grid, Link, List, ListItem, Typography } from '@mui/material'
import { Link as GLink } from 'gatsby'
import React from 'react'
import CustomModal from '../CustomModal/CustomModal'
import Policy from './Policy'

const LinksSX = { justifyContent: { xs: 'start', sm: 'end' } }

const Footer = () => (
  <Box sx={{ py: 2 }}>
    <Container sx={{ color: 'common.white' }}>
      <Grid container>
        <Grid sx={{ mb: 2 }} xs={12} sm={8} item>
          <Typography variant="h6">
            Kalkulator<strong>Pro</strong>
          </Typography>
          <Typography sx={{ mb: 1 }} variant="body1">
            Kalkulatory inżynierskie zostały opracowane w oparciu o literature techniczną
          </Typography>
          <Typography variant="caption">
            Informacje zawarte na stronie mają charakter wyłącznie informacyjny. Wyniki obliczeń
            powinny być interpretowane przez projektanta. Informacje zawarte w serwisie nie stanowią
            doradztwa technicznego. Odpowiedzialność za wszelkie decyzje, dobory czy rozwiązania
            oparte na wynikach obliczeń ponosi użytkownik.
          </Typography>
        </Grid>
        {/* <Divider
          sx={{ borderColor: 'hsla(255, 100%, 100%, 0.2)' }}
          orientation="vertical"
          flexItem
        /> */}
        <Grid xs={12} sm={4} item>
          <List sx={{ p: 0 }} dense>
            <ListItem sx={LinksSX} disableGutters>
              <Link
                underline="hover"
                variant="body2"
                color="inherit"
                component={GLink}
                to="/literatura"
              >
                Literatura
              </Link>
            </ListItem>
            <ListItem sx={LinksSX} disableGutters>
              <Link
                underline="hover"
                variant="body2"
                target="_blank"
                href="https://kbmprojekt.pl/"
                color="inherit"
              >
                KBM Projekt
              </Link>
            </ListItem>
            <ListItem sx={LinksSX} disableGutters>
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
