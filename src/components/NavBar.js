import React from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Hidden,
  IconButton,
  withStyles,
  SvgIcon,
} from "@material-ui/core";
import Logo from "../images/logo.svg";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";

const styles = theme => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuButtonText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.h6.fontWeight
  },
    menuButton: {
    marginRight: theme.spacing(2),
  },
  brandText: {
    color:"black",
  },
  noDecoration: {
    textDecoration: "none !important"
  }
});

function NavBar(props) {
  const {
    classes,
  } = props;
  const menuItems = [
    {
      link: "/",
      name: "Home",
      icon: <HomeIcon className="text-white" />
    },
    {
      link: "#feature",
      name: "Features",
    },
    {
      link: "#demo",
      name: "demo",
    },
  ];
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar className={classes.toolbar}>
          <div>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
      <SvgIcon>
        <Logo/>
       </SvgIcon>
    </IconButton>
            <Typography
              variant="h4"
              className={classes.brandText}
              display="inline"
              color="secondary"
            >
              <b>Pro</b>
               gressive
               &nbsp;<b>Ca</b>mpaigning
            </Typography>
          </div>
          <div>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
              >
                <MenuIcon color="primary" />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              {menuItems.map(element => {
                if (element.link) {
                  return (
                      <Button
                        color="secondary"
                        size="large"
                        classes={{ text: classes.menuButtonText }}
                      >
                        {element.name}
                      </Button>
                  );
                }
                return (
                  <Button
                    color="secondary"
                    size="large"
                    onClick={element.onClick}
                    classes={{ text: classes.menuButtonText }}
                    key={element.name}
                  >
                    {element.name}
                  </Button>
                );
              })}
            </Hidden>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
  openRegisterDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(NavBar);
