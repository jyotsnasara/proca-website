import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import {
  Grid,
  Typography,
  withWidth,
  withStyles,
  Button,
} from "@material-ui/core"
import calculateSpacing from "./calculateSpacing"
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow"

const styles = theme => ({
  containerFix: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6),
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4),
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  cardWrapper: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 340,
    },
  },
  cardWrapperHighlighted: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "auto",
      marginRight: "auto",
      maxWidth: 360,
    },
  },
})

function DemoSection(props) {
  const { width, classes } = props
  return (
    <div className="lg-p-top" style={{ backgroundColor: "#FFFFFF" }}>
      <Typography
        variant="h3"
        align="center"
        className="lg-mg-bottom"
        id="demo"
      >
        Demonstration
      </Typography>
      <div className={classNames("container-fluid", classes.containerFix)}>
        <Grid
          container
          spacing={calculateSpacing(width)}
          className={classes.gridContainer}
        >
          <Grid
            item
            className={classes.cardWrapperHighlighted}
            xs={12}
            sm={6}
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
              <p>Add a petition in your website in 2 minutes</p>
              <Button variant="contained" color="primary" onClick={addForm}>
                Add the signature form <DoubleArrowIcon />
              </Button>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            className={classes.cardWrapper}
            data-aos="zoom-in-up"
          >
            <div id="proca-form">
                <p>❶ add this html code where you want the widget: </p>
                <pre>{'<div id="proca-form" />'}</pre>
                <p>❷ add this html code anywhere in your page: </p>
                <pre>
                  {'<script id="proca"'}
                  <br />
                  {
                    ' src="https//widget.proca.foundation/d"'
                  }
                  <br />
                  {'"> </script>'}
                </pre>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

const addForm = params => {
  var s = document.createElement("script")
  s.src = "https://widget.proca.foundation/d/proca.foundation"
  //s.src="http://localhost:5000/d/proca.foundation/index.js";
  s.type = "text/javascript"
  s.dataset.mode = "form"
  s.dataset.page = "2"
  s.id = "proca"
  document.getElementsByTagName("head")[0].appendChild(s)
}

DemoSection.propTypes = {
  width: PropTypes.string.isRequired,
}

export default withStyles(styles, { withTheme: true })(withWidth()(DemoSection))
