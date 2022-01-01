import React from 'react';
import { makeStyles } from '@material-ui/core';
import bg2 from '../components/images/bg2.png';
import Header from '../components/About.styled';

const useStyles = makeStyles(() => ({
   aboutUsBg: {
      height: '100vh',
      backgroundImage: `url(${bg2})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      marginTop: '-1.2rem',
   },
}));


function AboutUs() {
   return (
      <div>
        <Header></Header>
      </div>
   )
}

export default AboutUs
