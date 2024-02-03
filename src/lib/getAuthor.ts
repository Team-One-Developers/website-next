import { allAuthors } from "contentlayer/generated"

export const getAuthor = (name: string) => {
    const author = allAuthors.filter((a) => a.name === name)[0]

    return author ? author : allAuthors.filter((a) => a.name === "Team One Developers")[0]
}
