import React,{Fragment,useEffect} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeadSection from "../components/home/HeadSection"
import FeatureSection from "../components/home/FeatureSection"
import DemoSection from "../components/home/DemoSection"

import AOS from "aos/dist/aos";
import "aos/dist/aos.css";


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
