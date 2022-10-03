import { StoryblokComponent } from "@storyblok/react"
import Image from "next/image"

function NewsCard({ blok }) {
    return (
        <a href={'?eventId=' + blok._uid} className="relative col-span-3 max-w-sm bg-white rounded-r-50 z-10  flex flex-col h-fit gap-4 bottom-0 left-0 border-l-4 border-blue-500 relative bg-white rounded-br-50 z-10  flex flex-col h-full gap-4 bottom-0 left-0 border-l-4 border-blue-700 hover:drop-shadow-lg hover:border-blue-500 hover:text-blue-500">
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
                        /></div>
                )}
                <div className="p-8 flex flex-col gap-3">
                    {blok.location && <h4 className="h4 text-base font-light">{blok.location}</h4>}
                    {blok.date && <h4 className="h4 text-base font-light">{blok.date}</h4>}
                    {blok.headline && <h3 className="text-2xl font-bold">{blok.headline}</h3>}
                </div>
        </a>
    )
}

export default NewsCard