'use client'

import { default as CookieConsent } from 'react-cookie-consent'

import { Typography } from '../atoms/Typography'

export const Cookie = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="AKZEPTIEREN"
      declineButtonText="ABLEHNEN"
      enableDeclineButton={true}
      cookieName="er"
      buttonClasses="leading-[1.15] rounded-[3px] font-SpaceGroteskRegular text-sm py-2.5 px-3.5 text-t1-darkGray bg-t1-green"
      declineButtonClasses="leading-[1.15] rounded-[3px] font-SpaceGroteskRegular text-sm py-2.5 px-3.5 text-t1-white bg-t1-darkGray"
      style={{ alignItems: 'center', lineHeight: 1 }}
    >
      <Typography className="mb-0 text-t1-white" variant="md">
        Durch die Nutzung dieser Website erklären Sie sich mit unserer
        Verwendung von Cookies einverstanden. Wir verwenden Cookies, um Ihnen
        ein tolles Erlebnis zu bieten und unsere Website wirksam zu betreiben.
      </Typography>
    </CookieConsent>
  )
}

export default Cookie