import { StoryblokComponent } from "@storyblok/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/pro-regular-svg-icons"
import Image from "next/image"

function TeamCard({ blok }) {
    return (
        <div className="relative col-span-12 md:col-span-4 max-w-sm bg-white rounded-r-50 z-10 flex flex-col h-full gap-4 bottom-0 left-0 border-l-6 border-blue-700">

            {blok.picture?.filename && (
                <div className="relative aspect-square">
                    <Image
                        src={blok.picture.filename}
                        alt={blok.picture.alt}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL={blok.picture.filename + '/m/50x0'}
                        className=" top-0 left-0 w-full h-3/5 rounded-tr-50"
                    />
                </div>
            )}
            <div className="p-8 flex flex-col gap-3">
                {blok.name && <h4 className="font-light">{blok.name}</h4>}
                {blok.function && <h3>{blok.function}</h3>}
                <div className="flex flex-wrap justify-between gap-2 mt-5">
                    {blok.button && blok.button.map(blok => (
                        <StoryblokComponent key={blok._uid} blok={blok} />
                    ))}
                    {blok.phone_number &&
                        <a href={`tel:${blok.phone_number}`} className="btn btn-secundary max-h-14 aspect-square border-3 border-blue-700 text-blue-700 font-bold hover:border-blue-500 hover:text-blue-500">
                            <span className="sr-only">Anrufen</span>
                            <FontAwesomeIcon icon={faPhone} />
                        </a>
                    }
                </div>
            </div>
        </div>
    )
}

export default TeamCard