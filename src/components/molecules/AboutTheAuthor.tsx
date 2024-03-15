import { Author } from "contentlayer/generated"
import Typography from "../atoms/Typography"
import { ProfilePicture } from "../molecules/ProfilePicture"

export const AboutTheAuthor = ({ author }: { author: Author }) => {
    return (
        <div className="flex w-full flex-col  gap-2 rounded-md">
            <Typography as="p" variant="subtitle" className="text-xl font-medium">
                Über den Autor
            </Typography>
            <div className="flex items-center gap-4">
                <ProfilePicture imgSrc={author.profileImg} authorName={author.name} />
                <div className="flex flex-col gap-1">
                    <Typography as="p" variant="subtitle">
                        {author.name}
                    </Typography>
                    <Typography as="p" variant="paragraph" className="">
                        {author.position}
                    </Typography>
                </div>
            </div>
            {/* <hr className="my-4" /> */}
            {/* <Mdx code={author.body.code} theme="light" /> */}
        </div>
    )
}
