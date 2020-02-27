import PropTypes from "prop-types"
import React from "react"
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

const Header = ({ siteTitle }) => (
  <header>
    <CssBaseline />
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">{siteTitle}</Typography>
      </Toolbar>
    </AppBar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
