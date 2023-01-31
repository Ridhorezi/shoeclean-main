/* eslint-disable @next/next/no-css-tags */
import { useEffect } from 'react'
import Head from 'next/head'
//= Layout
import AppLayout from '../src/layouts/app-layout'
//= Components
import HeaderHome from '../src/components/Architecture/Header'
import Hero from '../src/components/Architecture/Hero'
import WaBot from '../src/components/Common/StickyBar'
import Numbers from '../src/components/Architecture/Numbers'
import Services from '../src/components/Architecture/Services'
import Portfolio from '../src/components/Architecture/Portfolio'
import Footer from '../src/components/Architecture/Contact';
import Copyright from '../src/components/Footers/ArchitectureFooter';

const HomeArchitecture = () => {
  useEffect(() => {
    document.body.classList.add('index-arch')

    const removeClasses = [
      'index-bus1',
      'index-corporate',
      'index-restaurant',
      'index-freelancer',
      'cr-agency',
      'mobile-app',
      'gr-orange-bg',
      'land-demo2',
      'index-main',
      'nft-market',
    ]

    document.body.classList.remove(...removeClasses)
  }, [])

  const nav_links = [
    {
      name: 'Home',
      href: '#0',
    },
    {
      name: 'Information',
      href: '#0',
    },
    {
      name: 'Services',
      href: '#0',
    },
    {
      name: 'Gallery',
      href: '#0',
    },
    {
      name: 'Contact',
      href: '#0',
    },
  ]

  return (
    <>
      <Head>
        <title>ShoeClean | Page</title>
      </Head>

      <AppLayout type="architecture" links={nav_links}>
        <HeaderHome />
        <main className="position-re">
          <div
            className="bg-pattern bg-img"
            style={{ backgroundImage: "url('arch/img/pattern-bg.svg')" }}
          ></div>
          <WaBot />
          <Hero />
          <Numbers />
          <Services />
          <Portfolio />
          <Footer />
          <Copyright />
        </main>
      </AppLayout>
    </>
  )
}

export default HomeArchitecture
