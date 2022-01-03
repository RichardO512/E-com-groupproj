import * as React from 'react';

import { makeStyles, CardContent, Grid, Typography, Card } from '@material-ui/core';

import { styled } from '@mui/material/styles';

const cardContents = [
   {
      cardImg:
         'https://cdn-icons.flaticon.com/png/512/3293/premium/3293810.png?token=exp=1641038936~hmac=6b33877e5c06a2a69dddcfe2cad2ef62',
      cardTitle: 'Title1',
      cardDescription: 'service for bla bla blaservice for service for bla bla blaservice for bla bla bla bla bla bla',
   },
   {
      cardImg:
         'https://cdn-icons.flaticon.com/png/512/3293/premium/3293810.png?token=exp=1641038936~hmac=6b33877e5c06a2a69dddcfe2cad2ef62',
      cardTitle: 'Title2',
      cardDescription: 'service for bla bla blaservice for blservice for bla bla blaservice for bla bla blaa bla bla',
   },
   {
      cardImg:
         'https://cdn-icons.flaticon.com/png/512/3293/premium/3293810.png?token=exp=1641038936~hmac=6b33877e5c06a2a69dddcfe2cad2ef62',
      cardTitle: 'Title3',
      cardDescription: 'service for bla bla blaservice for bla bla blservice for bla bla blaservice for bla bla blaa',
   },
];

const useStyles = makeStyles(() => ({
   imageContainer: {
      height: '140px',
   },

   image: {
      height: '120px',
      width: '120px',
      padding: '1.5rem',
      marginLeft: '25%',
   },

}));

function CardComponent() {
   const classes = useStyles();

   return (
      <Grid container direction="row" justifyContent="center" spacing={8}>
         {cardContents.map((item) => (
            <Grid item xs={7} md={3}>
               <Card sx={{maxWidth: 250}} className={classes.card}>
                  <div className={classes.imageContainer}>
                     <img src={item.cardImg} className={classes.image} />
                  </div>

                  <CardContent>
                     <Typography
                        gutterBottom
                        variant="h4"
                        component="div"
                        align="center"
                     >
                        {item.cardTitle}
                     </Typography>
                     <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                     >
                        {item.cardDescription}
                     </Typography>
                  </CardContent>
               </Card>
            </Grid>
         ))}
      </Grid>
   );
}

export default CardComponent;
