import { useId } from 'react'
import Image from 'next/image'

import { Container } from '@/components/Container'
import imgAzure from '@/images/portfolio/azure.png'
import imgDevOps from '@/images/portfolio/azuredevops.png'
import imgAngular from '@/images/portfolio/angular.png'
import imgCSharp from '@/images/portfolio/c-sharp.png'
import imgSqlServer from '@/images/portfolio/ms-sql.png'
import imgNodeJs from '@/images/portfolio/nodejs.png'
import imgReact from '@/images/portfolio/react-logo.png'
import imgSignalr from '@/images/portfolio/signalr.png'
import imgTypescript from '@/images/portfolio/typescript.png'
import imgDocker from '@/images/portfolio/docker.png'
import imgCosmos from '@/images/portfolio/cosmosdb.png'

const images = [
  imgAzure,
  imgDevOps,
  imgAngular,
  imgCSharp,
  imgSqlServer,
  imgNodeJs,
  imgReact,
  imgSignalr,
  imgTypescript,
  imgDocker,
  imgCosmos,
]

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="border-t py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900">
            What we specialise in
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            We have a breadth of experience in Microsoft Azure and associated
            technologies and platform features.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {images.map((image, idx) => (
            <li
              key={idx}
              className="grid place-items-center rounded-2xl border border-gray-200 p-8"
            >
              <Image src={image} width="200" height="100" alt="tech"></Image>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
