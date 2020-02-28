import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../images/logo.svg"
import {
  Button,
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardHeader,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow"
import WidgetsIcon from "@material-ui/icons/Widgets"
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople"
//import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import FingerprintIcon from "@material-ui/icons/Fingerprint"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"

import ShareIcon from "@material-ui/icons/Share"
import LinkIcon from "@material-ui/icons/Link"

const useStyles = makeStyles({
  root: {},
  logo: { maxWidth: 200 },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
})


const addForm = params => {
  var s = document.createElement("script")
  s.src = "https://widget.proca.foundation/static/js/main.0-1.js"
  //s.src="http://localhost:3000/static/js/bundle.js";
  s.type = "text/javascript"
  s.dataset.mode = "form"
  s.id = "proca"
  document.getElementsByTagName("head")[0].appendChild(s)
}

const IndexPage = () => {
const classes = useStyles()
  return (
    <Layout>
      <SEO title="ProCa: Progressive Campaigning into your website made easy" />
      <Grid container spacing={1}>
        <Grid item xs={6} sm={3}>
          <Box p={3} className={classes.logo}>
            <Logo m={2} className={classes.logo} />
          </Box>
        </Grid>
        <Grid item xs={6} sm={9}>
          <h1>
            You want to engage your members and ask them to take an online
            action?
          </h1>
          <p>
            We have worked with some of the biggest online campaigning
            organisations, learnt what works and implemented them in an easy to
            use campaigning tool so you can benefit from it.
          </p>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <SimpleBox
          title="Petition signature widget"
          subtitle="We add our petition in your site"
          icon={WidgetsIcon}
        >
          No need for another password nor to learn a new CMS. All your campaign
          content is managed in your website
        </SimpleBox>
        <SimpleBox
          title="Made for NGOs' networks and grassroot"
          subtitle="multiple websites, same campaign"
          icon={EmojiPeopleIcon}
        >
          You can have as many signature's forms as you want. We count the
          signatures together, we keep the contact details separate
        </SimpleBox>
        <SimpleBox
          title="The most privacy friendly campaign tool"
          subtitle="Full GDPR compliant, full encryption option"
          icon={FingerprintIcon}
        >
          We have the option to fully encrypt your supporters signature, so only
          you can access their data
        </SimpleBox>
        <SimpleBox
          title="Sharing is caring"
          subtitle="Let your supporters multiply their impact"
          icon={ShareIcon}
        >
          We make it easy to share on social media or email, and give you
          insight about which social media works best
        </SimpleBox>
        <SimpleBox
          title="Integrated with your CRM"
          subtitle="contact your supporters directly from your contact database"
          icon={LinkIcon}
        >
          Our tool adds your supporters directly in your CiviCRM or mailchimp,
          so you can update them on your campaign.
        </SimpleBox>
        <SimpleBox
          title="For progressive organisations"
          subtitle="By progressive technologists and campaigners"
          icon={FavoriteBorderIcon}
        >
          Our tool is opensource, our values are progressive and our community
          is inclusive.
        </SimpleBox>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <h2 id="demo">Demonstration</h2>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box p={3}>
            <p>Add a petition in your website in 2 minutes</p>
            <Button variant="contained" color="primary" onClick={addForm}>
              Add the signature form <DoubleArrowIcon />
            </Button>
            <script></script>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div id="proca-form">
            <Box p={3}>
              <p>❶ add this html code where you want the widget: </p>
              <pre>{'<div id="proca-form" />'}</pre>
              <p>❷ add this html code anywhere in your page: </p>
              <pre>
                {'<script id="proca"'}
                <br />
                {' src="https//widget.proca.foundation/static/js/main.0-1.js"'}
                <br />
                {' data-mode="form" action="1"> </script>'}
              </pre>
            </Box>
          </div>
        </Grid>
      </Grid>
    </Layout>
  )
}

const Icon = props => {
  if (!props.icon) return null
  const IconTag = props.icon
  return <IconTag />
}
const SimpleBox = props => {

  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Card>
        <CardHeader
          title={props.title}
          subheader={props.subtitle}
          avatar={<Icon icon={props.icon} />}
        />
        <CardContent>
          <Typography variant="body2" component="p" color="textSecondary">
            {props.children}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default IndexPage
