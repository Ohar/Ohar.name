import React from 'react'

import Layout from '@/components/Layout'
import Seo from '@/components/Seo'

import ImgDeus from '@/images/deus.png'
import ImgEst from '@/images/est.png'
import ImgMachina from '@/images/machina.png'

import '@/styles/offset.css'
import '@/styles/mechanicus.css'

const IndexPage = () => (
  <Layout>
    <Seo keywords={['Pavel Lysenko site', 'Сайт Павла Лысенко', 'Ohar']} />
    <h1 className="offset">Сайт Павла Лысенко</h1>

    <article className="mechanicus">
      <h1 className="offset">Deus Mechanicus</h1>

      <section className="mechanicus__logo">
        <h1 className="offset">Omnissian</h1>
      </section>

      <section className="mechanicus__motto">
        <h1 className="offset">Deus est machina</h1>
        <img className="mechanicus__word" src={ImgDeus} alt='Deus' width={229} height={85}/>
        <img className="mechanicus__word" src={ImgEst} alt='Est' width={173} height={85}/>
        <img className="mechanicus__word" src={ImgMachina} alt='Machina' width={410} height={85}/>
      </section>
    </article>
  </Layout>
)

export default IndexPage
