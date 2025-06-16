"use client"

import cn from "@/utils/cn"
import { SpinnerIcon } from "@sanity/icons"
import { useHubspotForm } from "next-hubspot"

export interface HubspotFormProps {
    portalId: string
    formId: string
}

export const HubspotForm = ({ portalId, formId }: HubspotFormProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { isFormCreated, isError, error, isScriptLoaded } = useHubspotForm({
        portalId,
        formId,
        target: `#hubspot-form-${portalId}-${formId}`
    })

    // if (!isScriptLoaded) {
    //     return (
    //         <div className="flex h-[500px] w-full items-center justify-center">
    //             <SpinnerIcon className="text-t1-black size-9 animate-spin" />
    //         </div>
    //     )
    // }

    return (
        <div className="-mx-10 min-h-[500px]" id={`hubspot-form-${portalId}-${formId}`}>
            <div className={cn("flex size-full items-center justify-center", isScriptLoaded && "hidden")}>
                <SpinnerIcon className="text-t1-black size-9 animate-spin" />
            </div>
        </div>
    )
}

export default HubspotForm
