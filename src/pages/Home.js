import { makeStyles} from '@material-ui/core';
import React from 'react';
import Services from '../pages/Services';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import flute from '../components/images/flute.jpg';


const useStyles = makeStyles(() => ({
   hero: {
      height: '100vh',
      backgroundImage: `url(${flute})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
   },

   



   heroHeading: {
      fontSize: '6rem',
      color: '#fff1ff',
   },
}));

function Home() {
   const classes = useStyles();

   return (
      <div id="home">
         <div className={classes.hero}>
            <div>
               <h1 className={classes.heroHeading}>Main Heading Something</h1>
            </div>
         </div>
   
         <Services />
         <AboutUs />
         <ContactUs />
      </div>
   );
}

export default Home;
