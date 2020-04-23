import PropTypes from "prop-types"
import React from "react"
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  SvgIcon,
} from "@material-ui/core"
import { withStyles } from '@material-ui/core/styles';
//import MenuIcon from "@material-ui/icons/Menu"
import Logo from "../images/logo.svg";

const styles = theme => ({

//const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor:"lightgray"
  },
  title: {
    flexGrow: 1,
  },
});

const Header = ({siteTitle,classes}) =>{
  //{ siteTitle, classes}) => {
//  const {siteTitle, classes}= props;
//  const classes = useStyles();
  console.log (classes);
  return (
  <header className={classes.root}>
    <CssBaseline />
    <AppBar position="fixed" color="inherit">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="home page" href="/#top" className={classes.menuButton} >
          <SvgIcon ><Logo />
          </SvgIcon >
        </IconButton>
        <Typography variant="h6" className={classes.title}>{siteTitle}</Typography>

          <Button href="#feature" color="inherit" >Features</Button>
          <Button href="#demo" color="inherit" >Demo</Button>
      </Toolbar>
    </AppBar>
  </header>
);
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  classes: PropTypes.object.isRequired,
}

Header.defaultProps = {
  siteTitle: ``,
}

//export default withStyles(styles, { withTheme: true })(Header);
export default withStyles(styles)(Header);
//export default Header;
