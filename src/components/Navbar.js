import React from 'react';
import logo from './images/logo.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {
   AppBar,
   Toolbar,
   CssBaseline,
   makeStyles,
   useTheme,
   useMediaQuery,
} from '@material-ui/core';
import DrawerComponent from './Drawercomponent';

const useStyles = makeStyles((theme) => ({

   navbar: {
      backgroundColor: '#440a67',
   },
   navlink: {
      marginLeft: theme.spacing(30),
      display: 'flex',
   },
   logo: {
      cursor: 'pointer',
   },
   link: {
      textDecoration: 'none',
      color: 'white',
      fontSize: '1.1rem',
      marginLeft: theme.spacing(3),
      '&:hover': {
         borderBottom: '2px solid #d74d63',
         
      },
   },
}));

function Navbar() {
   const classes = useStyles();
   const theme = useTheme();
   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
   return (
      <AppBar position="fixed" className={classes.navbar}>
         <CssBaseline />
         <Toolbar>
            <Link
               className="nav-link"
               to="/E-com-groupproj"
            
            >
               <img src={logo} alt="Company Logo" className={classes.logo} />
            </Link>
            {isMobile ? (
               <DrawerComponent />
            ) : (
               <div className={classes.navlink}>
                  <Link
                     className="nav-link"
                     to="/E-com-groupproj"
                     className={classes.link}
                  >
                     Home
                  </Link>
                  <HashLink
                     className="nav-link"
                     to="/E-com-groupproj#services"
                     className={classes.link}
                  >
                     Services
                  </HashLink>
                  <HashLink
                     className="nav-link"
                     to="/E-com-groupproj#aboutUs"
                     className={classes.link}
                  >
                     About Us
                  </HashLink>
                  <Link to="/faq" className={classes.link}>
                     FAQs
                  </Link>
                  <Link
                     className="nav-link"
                     to="/logIn"
                     className={classes.link}
                  >
                     Login
                  </Link>
                  <HashLink
                     className="nav-link"
                     to="/E-com-groupproj#contactUs"
                     className={classes.link}
                  >
                     Contact Us
                  </HashLink>
               </div>
            )}
         </Toolbar>
      </AppBar>
   );
}

export default Navbar;
