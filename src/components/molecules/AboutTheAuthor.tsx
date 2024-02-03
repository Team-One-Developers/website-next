
import { Author } from "contentlayer/generated"
import { Mdx } from "../MdxComponents"
import { ProfilePicture } from "../atoms/ProfilePicture"
import Typography from "../atoms/Typography"

export const AboutTheAuthor = ({ author }: { author: Author }) => {
    return (
        <div className="w-full flex flex-col not-prose mt-32 rounded-md">
            <Typography as="p" variant="description">
                Über den Autor
            </Typography>
            <div className="flex justify-between">
                <div className="flex flex-col py-2">
                    <Typography as="h3" variant="h3">
                        {author.name}
                    </Typography>
                    <Typography as="p" variant="paragraph" className="text-primary">
                        {author.position}
                    </Typography>
                </div>
                <ProfilePicture imgSrc={author.profileImg} objectFit={author.profileImgObjectFit} />
            </div>
            <hr className="my-4" />
            <Mdx code={author.body.code} />
        </div>
    )
}
