import React from 'react';
import { makeStyles, Typography, Grid, Box, Item } from '@material-ui/core';
import bg2 from '../components/images/bg2.png';
import PageTitle from '../components/PageTitle';

const useStyles = makeStyles(() => ({
   aboutUsBg: {
      minHeight: '100vh',
      backgroundImage: `url(${bg2})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      marginTop: '-1.2rem',
   },

   header: {
      color: '#ffe3fe',
      marginLeft: '10rem',
      padding: '3rem 0 1.5rem 0',
   },
   pageDescription: {
      color: '#ffe3fe',
      lineHeight: '2rem',
      marginLeft: '10rem',
   },
   box1: {
      width: '150px',
      height: '150px',
      backgroundColor: '#d74d63',
      margin: '2rem 0 0 4rem',
   },
   box2: {
      width: '200px',
      height: '200px',
      backgroundColor: '#ffe3fe',
      marginLeft: '-8.5rem',
   },


}));

function AboutUs() {
   const classes = useStyles();
   return (
      <div id="aboutUs" className={classes.aboutUsBg}>
         <Typography variant="h1" component="h1" className={classes.header}>
            About Us
         </Typography>

         <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
               <Grid xs={12} md={7}>
                  <Typography className={classes.pageDescription} align="left">
                     "At vero eos et accusamus et iusto odio dignissimos ducimus
                     qui blanditiis praesentium voluptatum deleniti atque
                     corrupti quos dolores et quas molestias excepturi sint
                     occaecati cupiditate non provident, similique sunt in culpa
                     qui officia deserunt mollitia animi, id est laborum et
                     dolorum fuga. Et harum quidem rerum facilis est et expedita
                     distinctio. Nam libero tempore, cum soluta nobis est
                     eligendi optio cumque nihil impedit quo minus id quod
                     maxime placeat.
                  </Typography>
               </Grid>
               <Grid xs={6} md={5}>
                  <div  className={classes.box1}>
                     <Typography>Hello</Typography>
                  </div>
                  <div  className={classes.box2}>
                     <Typography className={classes.boxContent}>There</Typography>
                  </div>
               </Grid>
            </Grid>
         </Box>
      </div>
   );
}

export default AboutUs;
