import { Image } from "../atoms/Image"
import Typography from "../atoms/Typography"

export const Companies = () => {
    return (
        <div className="bg-transparent">
            <div className="flex justify-center text-center">
                <Typography
                    className="uppercase before:tracking-[0.25rem] before:content-['('] after:tracking-[0.25rem] after:content-[':)'] md:-mt-9"
                    as="h2"
                    variant="description"
                >
                    Kunden, die auf T1D zählen
                </Typography>
            </div>
            <div className="mt-12 flex flex-wrap gap-9">
                <div className="flex grow flex-wrap justify-around gap-9">
                    <Image
                        src="/images/companies/porsche.svg"
                        alt="Porsche Logo"
                        height={50}
                        width={230}
                        style={{ objectFit: "contain" }}
                    />
                    <Image
                        src="/images/companies/mercedes.svg"
                        alt="Mercedes Logo"
                        height={50}
                        width={230}
                        style={{ objectFit: "contain" }}
                    />
                </div>
                <div className="flex grow flex-wrap justify-around gap-9">
                    <Image
                        src="/images/companies/recaro.svg"
                        alt="Recaro Logo"
                        height={50}
                        width={230}
                        style={{ objectFit: "contain" }}
                    />
                    <Image
                        src="/images/companies/axelspringer.svg"
                        alt="AxelSpringer Logo"
                        height={50}
                        width={230}
                        style={{ objectFit: "contain" }}
                    />
                </div>
            </div>
        </div>
    )
}
