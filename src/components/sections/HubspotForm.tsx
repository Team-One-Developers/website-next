"use client"

import { useHubspotForm } from "next-hubspot"

export interface HubspotFormProps {
    portalId: string
    formId: string
}

export const HubspotForm = ({ portalId, formId }: HubspotFormProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { isFormCreated, isError, error } = useHubspotForm({
        portalId,
        formId,
        target: `#hubspot-form-${portalId}-${formId}`
    })

    return <div className="-m-10" id={`hubspot-form-${portalId}-${formId}`} />
}

export default HubspotForm
