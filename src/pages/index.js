import React,{Fragment,useEffect} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeadSection from "../components/home/HeadSection"
import FeatureSection from "../components/home/FeatureSection"
import DemoSection from "../components/home/DemoSection"

import AOS from "aos/dist/aos";
import "aos/dist/aos.css";


const IndexPage = () => {
  useEffect(()=>{AOS.init({ once: true })},[]);
  return (
    <Layout>
      <SEO title="ProCa: Progressive Campaigning into your website made easy" />
    <Fragment>
      <HeadSection />
        <FeatureSection />
        <DemoSection />
      </Fragment>

    </Layout>
  )
}

export default IndexPage
