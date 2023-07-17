import { FONT_CONFIGS } from '@/constants'

import './CompaniesPseudo.css'

import Image from 'next/image'

import { Heading } from '../atoms/Heading'

export const Companies = () => {
  return (
    <div className="bg-transparent">
      <div className="flex justify-center text-center">
        <Heading
          className="HeadlinePseudo md:-mt-9"
          tag="h2"
          fontDefaults={FONT_CONFIGS.desktop_topline}
        >
          Kunden, die auf T1D zählen
        </Heading>
      </div>
      <div className="mt-12 flex flex-wrap gap-9">
        <div className="flex grow flex-wrap justify-around gap-9">
          <Image
            src="/images/companies/porsche.svg"
            alt="Porsche Logo"
            height={50}
            width={230}
          />
          <Image
            src="/images/companies/mercedes.svg"
            alt="Mercedes Logo"
            height={50}
            width={230}
          />
        </div>
        <div className="flex grow flex-wrap justify-around gap-9">
          <Image
            src="/images/companies/recaro.svg"
            alt="Recaro Logo"
            height={50}
            width={230}
          />
          <Image
            src="/images/companies/axelspringer.svg"
            alt="AxelSpringer Logo"
            height={50}
            width={230}
          />
        </div>
      </div>
    </div>
  )
}
