import React from "react";
import PropTypes from "prop-types";
import { Grid, Typography, isWidthUp, withWidth } from "@material-ui/core";


import WidgetsIcon from "@material-ui/icons/Widgets"
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople"
//import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import FingerprintIcon from "@material-ui/icons/Fingerprint"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"

import ShareIcon from "@material-ui/icons/Share"
import LinkIcon from "@material-ui/icons/Link"


import calculateSpacing from "./calculateSpacing";
import FeatureCard from "./FeatureCard";

const iconSize = 30;

const features = [
  {
    color: "#00C853",
    headline: "Petition Signature Widget",
    subtitle: "We add our petition in your site",
    text:
      "No need for another password nor to learn a new CMS. All your campaign content is managed in your website",
    icon: <WidgetsIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "0"
  },
  {
    color: "#6200EA",
              headline:"Made for NGOs' networks and grassroot",
          subtitle:"multiple websites, same campaign",
          icon:<EmojiPeopleIcon style={{ fontSize: iconSize }} />,

    text:
      "You can have as many signature's forms as you want. We count the signatures together, we keep the contact details separate",
    mdDelay: "200",
    smDelay: "200"
  },
  {
    color: "#0091EA",
    headline: "The most privacy friendly campaign tool",
    subtitle:"Full GDPR compliant, full encryption option",
    text:
      "We have the option to fully encrypt your supporters signature, so only you can access their data",
    icon: <FingerprintIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "0"
  },
  {
    color: "#d50000",
    headline: "Sharing is caring",
    subtitle:"Let your supporters multiply their impact",
    text:
      "We make it easy to share on social media or email, and give you insight about which social media works best",
    icon: <ShareIcon style={{ fontSize: iconSize }} />,
    mdDelay: "0",
    smDelay: "200"
  },
  {
    color: "#DD2C00",
    headline: "Integrated with your CRM",
    subtitle: "email your supporters directly from your contact database",
    text:
      "Our tool adds your supporters directly in your CiviCRM or mailchimp, so you can update them on your campaign.",
    icon: <LinkIcon style={{ fontSize: iconSize }} />,
    mdDelay: "200",
    smDelay: "0"
  },
  {
    color: "#64DD17",
    headline: "For progressive organisations",
    subtitle:"By progressive technologists and campaigners",

    text:"Our tool is opensource, our values are progressive and our community is inclusive",
    icon: <FavoriteBorderIcon style={{ fontSize: iconSize }} />,
    mdDelay: "400",
    smDelay: "200"
  },
];

function FeatureSection(props) {
  const { width } = props;
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container-fluid">
        <Typography variant="h3" align="center" className="lg-mg-bottom" id="feature">
          Features
        </Typography>
        <div className="container-fluid">
          <Grid container spacing={calculateSpacing(width)}>
            {features.map(element => (
              <Grid
                item
                xs={6}
                md={4}
                data-aos="zoom-in-up"
                data-aos-delay={
                  isWidthUp("md", width) ? element.mdDelay : element.smDelay
                }
                key={element.headline}
              >
                <FeatureCard
                  Icon={element.icon}
                  color={element.color}
                  headline={element.headline}
                  text={element.text}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

FeatureSection.propTypes = {
  width: PropTypes.string.isRequired
};

export default withWidth()(FeatureSection);
