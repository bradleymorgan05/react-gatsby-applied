import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Front-end developer (CSS, HTML) / Junior React" />
    <h1 style={{fontSize:'1.65rem', marginTop:'1rem', marginBottom:'0.75rem'}}>Frontend-разработчик (CSS, HTML, JS)</h1>
    <p style={{opacity: 0.7, fontSize: '0.9rem'}}>JavaScript • HTML • CSS • Git • WordPress • Shopify • Адаптивная верстка • Веб-разработка • SASS • SCSS • Webpack • Babel</p>

    <p>Ищем фронтенд-разработчика, который качественно верстает и имеет опыт разработки веб-приложений.</p>
    <p>Мы предлагаем не только интересные проекты, но и обучение в процессе работы. Поэтому отсутствие великолепных знаний может быть компенсировано огромным интересом к фронтенду и желанием расти.</p>

    <h2>Чем вы будете заниматься:</h2>
    <ul>
      <li>Разработка и сопровождение веб-приложений</li>
      <li>Разработка нового функционала по требованиям</li>
      <li>Полный цикл верстки и разработки проектов в команде с бекенд-разработчиками.</li>
      <li>Попутный рефакторинг и оптимизация</li>
    </ul>

    <h2>Требования:</h2>
    <ul>
      <li>Знание фреймворка ReactJS и модулей JavaScript</li>
      <li>Уверенное знание JavaScript (ES2015+) / HTML / CSS.</li>
      <li>Понимание принципов работы Promise</li>
      <li>Умение работать с GIT, Bitbucket и Jira</li>
      <li>Знание английского на уровне чтения технической документации</li>
      <li>Опыт работы с LESS или SCSS</li>

    </ul>

    <h2>Будет плюсом:</h2>
    <ul>
      <li>If you can write and read in English.</li>
      <li>Si puedes communicarte en Español.</li>
      <li>Опыт работы с WordPress, Shopify или Magento</li>
    </ul>

    <h2>Мы предлагаем:</h2>
    <ul>
      <li>100% удаленная работа - работайте из дома или любимой кофейни</li>
      <li>дружескую рабочую атмосферу в небольшом интеллигентном коллективе</li>
      <li>график работы 5/2 и гибкое начало рабочего дня.</li>
    </ul>


    <p style={{margin:0, marginTop:'2rem'}}>Все этапы приема на работу проводим удаленно, звонком с видео.</p>
    <p style={{margin:0}}>Напишите нам на электронную почту <a href="mailto:jobs@appliedlabsllc.com">jobs@appliedlabsllc.com</a></p>



    <p style={{marginTop:'2rem', marginBottom:'2rem'}}><Link style={{color: '#333', textDecoration:'none'}} to="/">&#8592; Go back</Link></p>

  </Layout>
)

export default SecondPage
