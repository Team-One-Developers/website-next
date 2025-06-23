"use client"

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import { codeInput } from "@sanity/code-input"
import { visionTool } from "@sanity/vision"
import { defineConfig, isDev } from "sanity"
import { media } from "sanity-plugin-media"
import { structureTool } from "sanity/structure"
import { theme } from "./src/sanity/studioTheme"
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { createAsyncPublishAction } from "@/sanity/actions/slugPublish"
import { apiVersion, dataset, projectId } from "./src/sanity/env"
import { schema } from "./src/sanity/schemaTypes"
import { structure } from "./src/sanity/structure"

import { SanityT1Logo } from "@/sanity/components/SanityT1Logo"

export default defineConfig({
    theme,
    icon: SanityT1Logo,
    basePath: "/studio",
    projectId,
    dataset,
    // Add and edit the content schema in the './sanity/schemaTypes' folder
    schema,
    plugins: isDev
        ? [
              codeInput(),
              structureTool({ structure }),
              media(),
              // Vision is for querying with GROQ from inside the Studio
              // https://www.sanity.io/docs/the-vision-plugin
              visionTool({ defaultApiVersion: apiVersion })
          ]
        : [codeInput(), structureTool({ structure }), media()],
    document: {
        // @ts-expect-error - sanity typing shit?
        actions: (prev, context) =>
            // when a blog or career post is published, we want to use our extended publish action for calculating the slug
            context.schemaType === "blog" || context.schemaType === "career" || context.schemaType === "leadcapture"
                ? prev.map((originalAction) =>
                      originalAction.action === "publish" ? createAsyncPublishAction(originalAction) : originalAction
                  )
                : prev
    }
})
