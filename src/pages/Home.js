import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Services from '../pages/Services';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

const useStyles = makeStyles()

function Home() {
   return (
      <div id="home">
         <h2>Hero Section</h2>
         <Typography>
           

         </Typography>
         <Services/>
         <AboutUs/>
         <ContactUs/>
       

         </div>
   );
}

export default Home;
