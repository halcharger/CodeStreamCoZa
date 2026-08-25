import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/home/Hero'
import { Clients } from '@/components/home/Clients'
import { AiEngineering } from '@/components/home/AiEngineering'
import { Work } from '@/components/home/Work'
import { Approach } from '@/components/home/Approach'
import { Expertise } from '@/components/home/Expertise'
import { ContactCta } from '@/components/home/ContactCta'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Hero />
      <Clients />
      <AiEngineering />
      <Work />
      <Approach />
      <Expertise />
      <ContactCta />
    </>
  )
}
