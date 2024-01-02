import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Head>
        <title>CodeStream.</title>
        <meta
          name="description"
          content="CodeStream. azure cloud specialists, custom software development, systems architecture."
        />
        <link rel="canonical" href="https://codestream.co.za/" />
      </Head>
      {/* <Header /> */}
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <Reviews />
      </main>
      <Footer />
    </>
  )
}
