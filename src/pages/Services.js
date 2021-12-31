import { makeStyles } from '@material-ui/core';
// import React from 'react';
import bg1 from '../components/images/bg1.png';
import icon1 from '../components/images/icon1.png';
import PageTitle from '../components/PageTitle';
import CardComponent from '../components/CardComponent';
import Box from '@mui/material/Box';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const useStyles = makeStyles(() => ({
   serviceBg: {
      height: '100vh',
      backgroundImage: `url(${bg1})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      marginTop: '-1.4rem',
   },

   title: {
      fontSize: '6rem',
      color: '#440a67',
   },

   serviceBox: {
      display: 'flex',
   }
}));



function Services() {
   const classes = useStyles();

   return (
      <div id="services" className={classes.serviceBg}>
         <PageTitle title="Services" />
         <CardComponent/>
      </div>
   );
}

export default Services;
