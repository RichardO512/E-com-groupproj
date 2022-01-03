import { makeStyles } from '@material-ui/core';
import React from 'react';
import Services from '../pages/Services';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import music from '../components/images/music.jpg';
import PageTitle from '../components/PageTitle';
import Team from "./Team";
import Footer from "./Footer";
const useStyles = makeStyles(() => ({
   hero: {
      height: '100vh',
      backgroundImage: `url(${music})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
   },
}));

function Home() {
   const classes = useStyles();

   return (
      <div id="home">
         <div className={classes.hero}>
            <div>
               <PageTitle title="hello" />
            </div>
         </div>

         <Services />
         <AboutUs />
         <Team />
         <ContactUs />
         <Footer />
      </div>
   );
}

export default Home;
