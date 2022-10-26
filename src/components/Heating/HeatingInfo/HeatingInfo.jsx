import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomModal from '../../CustomModal/CustomModal'
import PipeListContainer from '../../Informations/PipeListContainer'

const HeatingInfo = () => (
  <Box sx={{ my: { xs: 2, md: 4 }, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
    <CustomModal label="TYPOSZEREGI" title="Typoszeregi rur">
      <PipeListContainer />
    </CustomModal>
    <CustomModal maxWidth="md" label="POMOC" title="Instrukcja">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} sx={{ pr: 1 }}>
          <Typography mb={1} variant="h6">
            Obliczenia przewodów
          </Typography>
          <Typography mb={2} variant="body1">
            Wprowadź przepływ w m3/h lub w dm3/s aby program automatycznie dobrał średnicę i
            policzył spadek jednostkowy.
          </Typography>
          <Typography mb={2} variant="body1">
            Możesz także wprowadzić moc i różnicę temperatur - program obliczy automatycznie
            przepływ i dobierze średnicę
          </Typography>
          <Typography mb={2} variant="body1">
            Pamiętaj, że możesz zmienić temperaturę czynnika oraz jego rodzaj (woda, glikol
            propylenowy, etylenowy)
          </Typography>
          <Typography mb={2} variant="body1">
            Dobór rur na podstawie kryterium jednostkowego spadku ciśnienia.
          </Typography>
          <Typography mb={2} variant="body1">
            Opór jednostkowy w Pa/m obliczany jest na podstawie wzoru Darcy-Weisbecha. Chropowatość
            bezwzględna do wyboru wg użytkownika.
          </Typography>
          <Typography mb={2} variant="body1">
            Po podaniu mocy i różnicy temperatur pole przepływ wypełnia się samo.
          </Typography>
          <Typography mb={2} variant="body1">
            Pole przepływ w m3/h lub dm3/s można wypełniać wedle uznania. Po wpisaniu jednej
            wartości, druga wartość zostanie automatycznie przeliczona.
          </Typography>
          <Typography mb={2} variant="body1">
            Podane dobory powinny zostać przeanalizowane przez projektanta i dostosowane odpowiednio
            do danej sytuacji projekstowej.
          </Typography>
        </Grid>
        <Divider
          sx={{ mr: -1, display: { xs: 'none', md: 'inherit' } }}
          orientation="vertical"
          flexItem
        />
        <Grid item xs={12} md={6}>
          <Typography mb={1} variant="h6">
            Obliczenia zaworów
          </Typography>
          <Typography mb={2} variant="body1">
            wprowadź autorytet zaworu (domyślnie ustawiony 0.5); opory obiegu, na którym będzie
            zamontowany zawór (bez oporu tego zaworu) oraz wprowadź przepływ w m3/h lub w dm3/s aby
            programy obliczył wymagany Kv zaworu oraz spadek ciśnienia na tym zaworze w barach.
          </Typography>
          <Typography mb={2} variant="body1">
            Zalecany autorytet to 0,3 - 0,7. Maksymalna wartość autorytetu jaką można wprowadzić do
            obliczeń to 0.99
          </Typography>
          <Typography mb={2} variant="body1">
            W drugim typie obliczeń wybierz zawór o odpowiednim kvs oraz przepływ w m3/h lub w dm3/s
            aby program obliczył spadek na prawdziwym zaworze w barach i kilopaskalach
          </Typography>
          <Typography mb={2} variant="body1">
            Dodatkowo aplikacja obliczy realny autorytet zaworu porównując spadek ciśnienia realnego
            zaworu, do oporów w instalacji
          </Typography>
          <Typography mb={2} variant="body1">
            Wpisując przepływ w m3/h program przeliczy go na dm3/s i odwrotnie.
          </Typography>
        </Grid>
      </Grid>
    </CustomModal>
    <CustomModal maxWidth="md" label="WIEDZA" title="Wiedza">
      <Typography mb={2}>
        Domyślne kryterium jednostkowego spadku ciśnienia wynosi dP = 160 Pa/m
      </Typography>
      <Typography mb={2}>
        Roztwory glikolu mają większą lepkość niż czysta woda, co wpływa na wspólczynnik tarcia
        (większe straty ciśnienia).
      </Typography>
      <Typography mb={2}>
        Im większa temperatura wody czy glikolu, tym mniejsza lepkość i tym samym mniejszy
        współczynnik tarcia (mniejsze straty ciśnienia).
      </Typography>
      <Typography mb={2}>
        1 bar = 100 kPa <br /> 1 kPa = 0,01 bar
      </Typography>
      <Typography mb={2}>
        <b>Glikol propylenowy</b> uznawany jest za związek nieszkodliwy dla zdrowia, lub o bardzo
        niskiej szkodliwości. Nie stwierdzono by powodował uczulenia, nie wykazuje rakotwórczości i
        nie jest mutagenny. Kontakt z nierozcieńczonym glikolem propylenowym może wywołać
        podrażnienia oczu i skóry, jednak niegroźne i łatwo ustępujące, zwykle wraz z ustaniem
        kontaktu. W ciele jest szybko przekształcany w kwas mlekowy (w sposób podobny do
        przekształcania w mięśniach cukru w energię). W środowisku łatwo ulega biodegradacji
      </Typography>
      <Typography mb={2}>
        <b>Glikol etylenowy</b> jest substancją szkodliwą, depresyjnie działającą na ośrodkowy układ
        nerwowy. Działa drażniąco na błony śluzowe nosa i spojówki. Organizm wchłania go poprzez
        drogi oddechowe, skórę oraz z przewodu pokarmowego. Drogą pokarmową glikol początkowo
        powoduje objawy podobne do upojenia alkoholem, po czym (po kilku bądź kilkunastu godzinach)
        doprowadza do kwasicy metabolicznej. W przypadku podgrzewania glikolu powstająca para może
        prowadzić do utraty przytomności, natomiast w małych stężeniach powoduje podrażnienie nosa i
        gardła oraz bóle głowy. Warto zatem przy pracy z glikolem zachować szczególną ostrożność.
      </Typography>
    </CustomModal>
  </Box>
)

export default HeatingInfo
