import {
  Box, Grid, Hidden, Typography, Zoom,
} from '@mui/material';
import type { NextPage } from 'next';
import Image from 'next/image';
import Typist from 'react-typist';

import BgParticles from '@/components/BgParticles';
import Footer from '@/components/layout/Footer';
import Seo from '@/components/Seo';

import mascot from '../../public/image/mascot-2a.png';

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <main>
        <Grid container className='flex-grow h-screen items-center text-center bg-transparent justify-around' id="home">
          <BgParticles />
          <Grid item xs={12} md={6}>
            <Grid container justifyContent="center">
              <Zoom in style={{ transitionDelay: '200ms' }}>
                <Grid>
                  <Hidden smUp>
                    <Typography variant="h3" component="h1" className='text-mwhite'>
                      <Box fontWeight="fontWeightBold">Terima Kasih</Box>
                    </Typography>
                  </Hidden>
                  <Hidden smDown>
                    <Typography variant="h1" component="h1" className='text-mwhite'>
                      <Box fontWeight="fontWeightBold">Terima Kasih</Box>
                    </Typography>
                  </Hidden>
                  <Typography
                    variant="h6"
                    component="h2"
                    className='text-mwhite'
                  >
                    <Typist startDelay={300} avgTypingDelay={80}>
                      Sampai jumpa di event selanjutnya
                    </Typist>
                  </Typography>
                </Grid>
              </Zoom>
            </Grid>
          </Grid>
          <Grid item xs={6} md={3}>
            <div>
              <Image src={mascot} alt="Maskot MAGE 7" layout="responsive" />
            </div>
          </Grid>
          <Footer />
        </Grid>
      </main>
    </>
  );
};

export default Home;
