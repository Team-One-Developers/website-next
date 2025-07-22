"use client"

import Script from "next/script"

interface HubspotFormProps {
    portalId: string
    formId: string
    region?: string
}

export const HubspotForm = ({ portalId, formId, region = "eu1" }: HubspotFormProps) => {
    return (
        <>
            <Script
                src={`https://js-eu1.hsforms.net/forms/embed/${portalId}.js`}
                strategy="lazyOnload"
                id="hubspot-form-script"
            />
            <div className="hs-form-frame" data-region={region} data-form-id={formId} data-portal-id={portalId}></div>
        </>
    )
}
