import { App } from "@slack/bolt"

export const bolt = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    processBeforeResponse: true
})
