import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Team One Developers",
        short_name: "T1DEV Website",
        description: "Team One Developers Website",
        start_url: "/",
        display: "standalone",
        background_color: "#fff",
        theme_color: "#fff",
        icons: [
            {
                src: "/icon.png",
                sizes: "any",
                type: "image/png"
            }
        ]
    }
}
