import React from 'react';
import {
   makeStyles,
   Typography,
   createTheme,
   responsiveFontSizes,
   ThemeProvider,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
   title: {
      color: '#440a67',
   },
}));

let theme = createTheme();
theme = responsiveFontSizes(theme);

function PageTitle(props) {
   const classes = useStyles();
   return (
      <ThemeProvider theme={theme}>
         <Typography variant="h1" component="h1" align="center" className={classes.title}>
            {props.title}
         </Typography>
      </ThemeProvider>
   );
}

export default PageTitle;
