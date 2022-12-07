import Image from "next/image"
import Link from "next/link"

function Partnerlogo({ blok }) {
    let link = blok.link.url || '#'
    return (
        <Link href={link} >
            <a target='_blank' rel="noreferrer" className="relative col-span-6 md:col-span-3 grid place-items-center aspect-square bg-white md:h-40 rounded-50 hover:drop-shadow-lg">
                <Image
                    src={blok.picture.filename}
                    alt={blok.picture.alt}
                    layout="fill"
                    objectFit="contain"
                    placeholder="blur"
                    blurDataURL={blok.picture.filename + '/m/50x0'}
                    className="rounded-50"
                />
            </a>
        </Link>
    )
}

export default Partnerlogo