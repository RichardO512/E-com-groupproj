import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import { Box } from '@mui/system';

const cardContents = [
   {
      cardImg:
         'https://cdn-icons.flaticon.com/png/512/3293/premium/3293810.png?token=exp=1640925326~hmac=5874d42f18f798352ab04341aaf2fcfd',
      cardTitle: 'Title1',
      cardDescription: 'service for bla bla blaservice for bla bla bla',
   },
   {
      cardImg:
         'https://cdn-icons.flaticon.com/png/512/3270/premium/3270234.png?token=exp=1640925374~hmac=0031fba99424ae0e2d2eaa0cc5680e71',
      cardTitle: 'Title2',
      cardDescription: 'service for bla bla blaservice for bla bla bla',
   },
   {
      cardImg:
         'https://cdn-icons.flaticon.com/png/512/1895/premium/1895657.png?token=exp=1640925382~hmac=c86745a4ffc703334e17dfe17283e255',
      cardTitle: 'Title3',
      cardDescription: 'service for bla bla blaservice for bla bla bla',
   },
];

const useStyles = makeStyles(() => ({
   imgIcon: {
      width: '8rem',
      height: '8rem',
   },
   container: {
      display: 'flex',
      justifyContent: 'center',
      

   },

   cardContent: {
      margin: '2rem',
      height: 320,
      backgroundColor: '#ffe3fe',
      display: 'flex',
      backgroundColor: 'red',
   }
}));

function CardComponent() {
   const classes = useStyles();
   return (
      <Box className={classes.container}>
            {cardContents.map((item) => (
         <Card sx={{ maxWidth: 250 }} className={classes.cardContent}>
               <CardActionArea>
                  <div>
                     <img
                        src={item.cardImg}
                        alt="icon"
                        className={classes.imgIcon}
                     />
                  </div>

                  <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                        {item.cardTitle}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                        {item.cardDescription}
                     </Typography>
                  </CardContent>
               </CardActionArea>
            </Card>
            ))}
      </Box>
   );
}

export default CardComponent;
