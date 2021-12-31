import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
   title: {
      color: '#440a67',
   },
}));

function PageTitle(props) {
   const classes = useStyles();
   return (
      <>
         <Typography align="center" variant="h2" className={classes.title}>
            <h1>{props.title}</h1>
         </Typography>
      </>
   );
}

export default PageTitle;
