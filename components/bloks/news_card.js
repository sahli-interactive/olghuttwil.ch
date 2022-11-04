import NewsOverlay from "../bloks/news_overlay"
import Image from "next/image"
import { useState } from "react"
import dayjs from 'dayjs'
import 'dayjs/locale/de'

function NewsCard({ blok }) {
    let [isOpen, setIsOpen] = useState(false)
    const date = dayjs(blok.date).locale('de-ch').format('DD.MM.YYYY')

    function handleClick(event) {
        event.preventDefault()
        setIsOpen(true)
    }
    return (
        <>
            <a
                onClick={handleClick}
                href="#"
                className="relative col-span-12 md:col-span-4 rounded-r-50 flex flex-col gap-4 border-l-6 border-blue-700 bg-white rounded-br-50 hover:border-blue-500 hover:text-blue-500"
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
                            className="rounded-tr-50"
                        />
                    </div>
                )}
                <div className="p-6 md:p-7 flex flex-col gap-3">
                    <div className="flex justify-between">
                    {blok.location && <h4 className="text-base font-light">{blok.location}</h4>}
                    {date && <h4 className="text-base font-light">{date}</h4>}
                    </div>
                    {blok.headline && <h3 className="md:text-2xl font-bold">{blok.headline}</h3>}
                </div>
            </a>
            <NewsOverlay blok={blok} isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}

export default NewsCard