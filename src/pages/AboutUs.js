import React from 'react';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import bg2 from '../components/images/bg2.png';

const useStyles = makeStyles(() => ({
   aboutUsBg: {
      height: '100vh',
      backgroundImage: `url(${bg2})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      marginTop: '-1.2rem',
   },

   header: {
      paddingTop: '4rem',
      paddingLeft: '10rem',
      color: '#ffe3fe',
   },
   pageDescription: {
      paddingLeft: '10rem',
      color: '#ffe3fe',
   }
}));

function AboutUs() {
   const classes = useStyles();
   return (
      <div id='aboutUs'>

     
      <Grid className={classes.aboutUsBg}>
         <Typography variant="h1" className={classes.header}>About Us</Typography>
         <Typography variant="subtitle" className={classes.pageDescription}>
            About Us Description with sentences
         </Typography>
      </Grid>
      </div>
   );
}

export default AboutUs;
