import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1 style={{fontSize:'1.65rem', marginTop:'1rem', marginBottom:'0.75rem'}}>Senior Frontend-разработчик (Node.js and/or React)</h1>
    <p style={{opacity: 0.7, fontSize: '0.9rem'}}>JavaScript • React • Node • Git • Адаптивная верстка • SASS • SCSS • Webpack • Babel</p>

    <p>Мы находимся в поисках Senior front-end разработчика в команду разработки UI, работать над продуктом ChatGenie и секретный проект</p>

    <p style={{margin:0, marginTop:'2rem'}}>Все этапы приема на работу проводим удаленно, звонком с видео.</p>
    <p style={{margin:0}}>Напишите нам на электронную почту <a href="mailto:jobs@appliedlabsllc.com">jobs@appliedlabsllc.com</a></p>

    <p style={{marginTop:'2rem', marginBottom:'2rem'}}><Link style={{color: '#333', textDecoration:'none'}} to="/">&#8592; Go back</Link></p>
    
  </Layout>
)

export default SecondPage
