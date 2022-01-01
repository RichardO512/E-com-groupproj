import React from 'react';
import {
   makeStyles,
   Typography,
   createTheme,
   responsiveFontSizes,
   MuiThemeProvider,
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
      <MuiThemeProvider theme={theme}>
         <Typography variant="h3" align="center" className={classes.title}>
            <h1>{props.title}</h1>
         </Typography>
      </MuiThemeProvider>
   );
}

export default PageTitle;
