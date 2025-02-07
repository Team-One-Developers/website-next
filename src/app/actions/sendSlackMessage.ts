"use server"

import { bolt } from "@/lib/slack"
import { headers } from "next/headers"

interface SlackResponse {
    success: boolean
    error?: string
}

interface FormData {
    name: string
    email: string
    message: string
}

export async function sendSlackMessage({ name, email, message }: FormData, channel: string): Promise<SlackResponse> {
    try {
        if (!message || !channel) {
            return { success: false, error: "Message and channel are required" }
        }

        const ipAddress = await getIpAddress()

        const result = await bolt.client.chat.postMessage({
            channel,
            blocks: [
                {
                    type: "header",
                    text: {
                        type: "plain_text",
                        text: "New Contact Form Submission"
                    }
                },
                {
                    type: "divider"
                },
                {
                    type: "section",
                    text: {
                        type: "mrkdwn",
                        text: `*Name:*\n${name}\n*E-Mail:*\n${email}\n*Message:*\n${message}\n`
                    },
                    accessory: {
                        type: "image",
                        image_url: "https://api.slack.com/img/blocks/bkb_template_images/approvalsNewDevice.png",
                        alt_text: "computer thumbnail"
                    }
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
            text: `New Contact Form Submission: ${message}`,
            unfurl_links: true
        })

        if (!result.ok) {
            throw new Error(result.error || "Failed to send message")
        }

        return {
            success: true
        }
    } catch (error) {
        console.error("Error sending Slack message:", {
            error
        })
        return {
            success: false,
            error: (error as Error).message
        }
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
