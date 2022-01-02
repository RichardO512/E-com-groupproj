import bg1 from '../components/images/bg1.png';
import PageTitle from '../components/PageTitle';
import CardComponent from '../components/CardComponent';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(() => ({
   serviceBg: {
      minHeight: '100vh',
   },


}));



function Services() {
   const classes = useStyles();

   return (
      <div id="services" className={classes.serviceBg}>
         <PageTitle title=" Our Services"/>
         <CardComponent/>
   
      </div>
   );
}

export default Services;
