import NewsOverlay from "../bloks/news_overlay"
import Image from "next/image"
import { useState } from "react"
import dayjs from 'dayjs'
import 'dayjs/locale/de'

function NewsCard({ blok }) {
    let [isOpen, setIsOpen] = useState(false)
    const date = dayjs(blok.date).locale('de-ch').format('dd, DD.MM.YYYY')

    function handleClick(event) {
        event.preventDefault()
        setIsOpen(true)
    }
    return (
        <>
            <a
                onClick={handleClick}
                href="#"
                className="relative col-span-4 bg-white rounded-r-50 z-10  flex flex-col max-h-min gap-4 border-l-4 border-blue-700 relative bg-white rounded-br-50 z-10 hover:border-blue-500 hover:text-blue-500"
            >
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
                    <div className="flex justify-between">
                    {blok.location && <h4 className="h4 text-base font-light">{blok.location}</h4>}
                    {date && <h4 className="h4 text-base font-light">{date}</h4>}
                    </div>
                    {blok.headline && <h3 className="text-2xl font-bold">{blok.headline}</h3>}
                </div>
            </a>
            <NewsOverlay blok={blok} isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}

export default NewsCard