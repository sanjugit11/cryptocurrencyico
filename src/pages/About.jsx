import React from 'react'
import Layout from '../container/Layout'
import Particles from '../components/Particles'

const About = () => {
  return (
    <Layout title='Nosotros' description=''>
      <Particles />
      <div className='global-max-content about'>
        <h2 className='global-title-about' />
        <div className='about-content'>
          <p className='about-paragraph'>hello from about</p>
        </div>
      </div>
    </Layout>
  )
}

export default About
