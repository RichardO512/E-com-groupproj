import logo from './images/logo.png';
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
    useTheme,
    useMediaQuery,
 } from '@material-ui/core';
 import { Link } from 'react-router-dom';
import DrawerComponent from './Drawercomponent';
 
 const useStyles = makeStyles((theme) => ({
  
    navlink: {
       marginLeft: theme.spacing(5),
       display: 'flex',
    },
    logo: {
       flexGrow: 1,
       cursor: 'pointer',
    },
    link: {
       textDecoration: 'none',
       color: 'white',
       fontSize: '16px',
       marginLeft: theme.spacing(5),
       '&:hover': {
          color: 'yellow',
          borderBottom: '1px solid white',
       },
    },
    navbar: {
        background: '#440a67',
        display: 'flex',
    }
 }));
 
 function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
 
    return (
       <AppBar position="fixed" className={classes.navbar}>
          <CssBaseline />
          <Toolbar>
             <Typography variant="h4" className={classes.logo}>
                <img src={logo} alt="" />
             </Typography>
             {isMobile ? (
                <DrawerComponent />
             ) : (
                <div className={classes.navlink}>
                   <Link to="/" className={classes.link}>
                      Home
                   </Link>
                   <Link to="/about" className={classes.link}>
                      Services
                   </Link>
                   <Link to="/contact" className={classes.link}>
                      About Us
                   </Link>
                   <Link to="/faq" className={classes.link}>
                      FAQ
                   </Link>
                   <Link to="/example" className={classes.link}>
                      Contact Us
                   </Link>
                
                </div>
             )}
          </Toolbar>
       </AppBar>
    );
 }
 
 export default Navbar;
 
 //line <Link to="this should be the same as exact path on App.js".
 