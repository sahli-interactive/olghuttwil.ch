import Image from "next/image"
import Link from "next/link"

function Partnerlogo({ blok }) {
    return (
        <>
        <Image
            src={blok.picture.filename}
            alt={blok.picture.alt}
            layout="fill"
            objectFit="contain"
            placeholder="blur"
            blurDataURL={blok.picture.filename + '/m/50x0'}
            className=" top-0 left-0 w-full h-3/5"
        />
        </>
    )
}

export default Partnerlogo