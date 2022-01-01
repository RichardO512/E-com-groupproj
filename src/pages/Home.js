import { makeStyles} from '@material-ui/core';
import React from 'react';
import Services from '../pages/Services';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import flute from '../components/images/flute.jpg';
import PageTitle from '../components/PageTitle';


const useStyles = makeStyles(() => ({
   hero: {
      height: '100vh',
      backgroundImage: `url(${flute})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
   },

   



   heroHeading: {
      color: 'white',
   },
}));

function Home() {
   const classes = useStyles();

   return (
      <div id="home">
         <div className={classes.hero}>
            <div>
               <PageTitle title="hello" color="white"/>
            </div>
         </div>
   
         <Services />
         <AboutUs />
         <ContactUs />
      </div>
   );
}

export default Home;
