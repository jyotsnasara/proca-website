import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../images/logo.svg"
import { Button, Box,Grid,Typography,Card,CardContent } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
  },
  title: {
    fontSize: 18,
  },
  pos: {
    marginBottom: 12,
  },
});

const addForm = (params) => {
  var s = document.createElement('script');
  s.src="https://widget.proca.foundation/static/js/main.0-1.js";
  //s.src="http://localhost:3000/static/js/bundle.js";
  s.type="text/javascript";
  s.dataset.mode="form";
  s.id="proca";
//  s.text = "alert(\"hi\");"
//  <script id="proca" src="https//widget.proca.foundation
  document.getElementsByTagName('head')[0].appendChild(s);
}

const IndexPage = () => {
  return (
  <Layout>
    <SEO title="ProCa: Progressive Campaigning into your website made easy" />
    <Grid container spacing={1}>
      <Grid  item xs={12} sm={4}  >
    <Box p={3}>
        <Logo m={2}/>
    </Box>
      </Grid>
      <Grid item xs={12} sm={8} >
        <h1>
          You want to engage your members and ask them to take an online action?
        </h1>
      <p>
        We have worked with some of the biggest online campaigning organisations, learnt what works and implemented them in an easy to use campaigning tool so you can benefit from it.
      </p>
      </Grid>
    </Grid>
    <Grid container spacing={3}>
    <SimpleBox title="Petition signature widget" subtitle="We add our petition in your site">
    No need for another password nor to learn a new CMS. All your campaign content is managed in your website
  </SimpleBox>
    <SimpleBox title="Made for NGOs' networks and grassroot" subtitle="multiple websites, same campaign">
    You can have as many signature's forms as you want. We count the signatures together, we keep the contact details separate
  </SimpleBox>
    <SimpleBox title="The most privacy friendly campaign tool" subtitle="Full GDPR compliant, full encryption option">
    We have the option to fully encrypt your supporters signature, so only you can access their data
  </SimpleBox>
    <SimpleBox title="Sharing is caring" subtitle="Let your supporters multiply their impact">
We make it easy to share on social media or email, and give you insight about which social media works best
    </SimpleBox>
    <SimpleBox title="Integrated with your CRM" subtitle="contact your supporters directly from your contact database">
    Our tool adds your supporters directly in your CiviCRM or mailchimp, so you can update them on your campaign.
    </SimpleBox>
    <SimpleBox title="For progressive organisations" subtitle="By progressive technologists and campaigners">
    Our tool is opensource, our values are progressive and our community is inclusive.
  </SimpleBox>
    </Grid>
    <Grid container spacing={1}>
      <Grid  item xs={12}  >
    <h2>Demonstration</h2>
    </Grid>
      <Grid  item xs={12} sm={6}  >
    <Box p={3}>
        <p>Add a petition in your website in 2 minutes</p>
        <Button variant="contained" color="primary"onClick={addForm}>Add the signature form</Button>
    <script>
      
    </script>
    </Box>
      </Grid>
      <Grid item xs={12} sm={6} >
         <div id="proca-form">
    <Box p={3}>
    <p>❶ add this html code where you want the widget: </p>
    <pre>{'<div id="proca-form" />'}</pre>
    <p>❷ add this html code anywhere in your page: </p>
    <pre>{'<script id="proca"'}<br/>{' src="https//widget.proca.foundation/static/js/main.0-1.js"'}<br/>{' data-mode="form" action="1"> </script>'}</pre>
    </Box>
    </div>
    </Grid>
    </Grid>
    </Layout>
)}

const SimpleBox = (props) => {
 const classes = useStyles();

 return (
  <Grid  item xs={12} sm={6} lg={3} >
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
   {props.title}
        </Typography>
        <Typography className={classes.pos}>
   {props.subtitle}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">{props.children}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);
}

export default IndexPage
