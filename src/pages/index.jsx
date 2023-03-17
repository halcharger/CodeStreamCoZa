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
          content="CodeStream. azure clopud specialist, customer software development and systems architecture."
        />
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
