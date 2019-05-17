import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div style={{maxWidth:'680px'}}>
      <h1 style={{fontSize:'1.6rem', lineHeight:1.3}}>
        We are a Product Engineering Laboratory focused on building human-friendly
        solutions for real human problems.
      </h1>
      <p>
        We believe that all productized technology should be built with a Purpose;
        our product development ethos holds Purpose above all else, ensuring we
        deliver outsized value to clients and partners via thoughtful and seamless
        integration with existing teams and business processes.
      </p>
      <p>
        At heart, we are humanists and technologists. We specialize in leveraging
        the latest technologies—ranging from Augment & Virtual Reality, Machine
        Learning to Robotic Process Automation—to solve clients’ problems
        throughout the stack. While these categories are broad, we think
        strategically to ensure the best-fit languages and frameworks are employed
        to meet requirements - we firmly believe in a world where any programming
        language can live together!
      </p>
      <p>
        Our focus remains on growing valuable relationships in targeted markets.
        We are specialists in product development for Technology Service Providers
        and firms in the Financial Services space. We utilize our knowledge of
        best-in-class security and large scale systems to tackle the unique use
        cases these industries present.{" "}
      </p>

      <br/>
      <h2 style={{fontSize:'1.25rem'}}>Job Openings</h2>
      <p style={{margin:0}}>
        <Link className="tab-applied" to="/careers/jr-frontend-engineer/">100% удаленная работа - Jr. Frontend-разработчик (CSS, HTML, JS)</Link>
      </p>
      <p style={{margin:0}}>
        <Link className="tab-applied" to="/careers/sr-frontend-engineer/">100% удаленная работа - Senior Frontend-разработчик (Node.js and/or React)</Link>
      </p>
      <br/>
    </div>
  </Layout>
)

export default IndexPage
