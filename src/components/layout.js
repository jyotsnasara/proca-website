/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import theme from "./../theme";
import GlobalStyles from "./../GlobalStyles";
//import NavBar from "./NavBar";
import Header from "./header";


import "./layout.css"
import { withStyles, MuiThemeProvider, CssBaseline } from "@material-ui/core";

const styles = theme => ({
  wrapper: {
    backgroundColor: theme.palette.common.white
  }
});


const Layout = (props) =>{
  //{ children, classes }) => {
  const { children, classes } = props;
//  const classes = styles;
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={classes.wrapper}>
    <MuiThemeProvider theme={theme}>
            <CssBaseline />
        <GlobalStyles />

      {children}
    <Header siteTitle={data.site.siteMetadata.title} />

      <footer></footer>
    </MuiThemeProvider>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
   classes: PropTypes.object.isRequired,
}

//export default Layout;

export default withStyles(styles, { withTheme: true })(Layout);
