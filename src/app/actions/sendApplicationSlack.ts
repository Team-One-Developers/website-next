"use server"

import type { ApplicationData } from "@/app/actions/submitApplication"
import { bolt } from "@/utils/slack"
import { headers } from "next/headers"
import "server-only"

interface SlackResponse {
    success: boolean
    error?: string
}

export async function sendApplicationSlack(data: ApplicationData, channel: string): Promise<SlackResponse> {
    try {
        if (!channel) {
            return { success: false, error: "Channel is required" }
        }

        const ipAddress = await getIpAddress()

        const fields = [
            `*Stelle:*\n${data.jobTitle}`,
            `*Name:*\n${data.name}`,
            `*E-Mail:*\n${data.email}`,
            `*Telefon:*\n${data.phone}`,
            `*Deutschkenntnisse:*\n${data.germanLevel}`,
            `*Englischkenntnisse:*\n${data.englishLevel}`,
            `*Frühester Eintritt:*\n${data.startDate}`,
            `*Gehaltsvorstellung:*\n${data.salaryExpectation}`,
            `*Portfolio / LinkedIn:*\n${data.portfolioUrl}`,
            `*Wie gefunden:*\n${data.referralSource}`,
            `*Anschreiben:*\n${data.motivation}`
        ].join("\n")

        const result = await bolt.client.chat.postMessage({
            channel,
            blocks: [
                {
                    type: "header",
                    text: {
                        type: "plain_text",
                        text: "New Job Application"
                    }
                },
                {
                    type: "divider"
                },
                {
                    type: "section",
                    text: {
                        type: "mrkdwn",
                        text: fields
                    }
                },
                {
                    type: "context",
                    elements: [
                        {
                            type: "mrkdwn",
                            text: "📎 Lebenslauf im Anhang der E-Mail"
                        }
                    ]
                },
                {
                    type: "divider"
                },
                {
                    type: "context",
                    elements: [
                        {
                            type: "mrkdwn",
                            text: `*IP Address:* ${ipAddress}`
                        }
                    ]
                }
            ],
            text: `New Job Application: ${data.jobTitle} — ${data.name}`,
            unfurl_links: false,
            unfurl_media: false
        })

        if (!result.ok) {
            throw new Error(result.error || "Failed to send message")
        }

        return { success: true }
    } catch (error) {
        console.error("Error sending Slack message:", { error })
        return { success: false, error: (error as Error).message }
    }
}

const getIpAddress = async () => {
    const fallbackIpAddress = "0.0.0.0"
    const headerList = await headers()
    const forwardedFor = headerList.get("x-forwarded-for")

    if (forwardedFor) {
        return forwardedFor.split(",")[0] || fallbackIpAddress
    }

    return headerList.get("x-real-ip") ?? fallbackIpAddress
}
