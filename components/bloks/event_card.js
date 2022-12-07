import dayjs from 'dayjs'
import 'dayjs/locale/de'
import { useState } from 'react'
import Overlay from './overlay'

function EventCard({ blok }) {
    const date = dayjs(blok.date).locale('de-ch').format('dd, DD.MM.YYYY')
    let [isOpen, setIsOpen] = useState(false)

    function handleClick(event) {
        event.preventDefault()
        setIsOpen(true)
    }
    return (
        <>
            <a
                onClick={handleClick}
                href="#"
                className="relative bg-white rounded-br-50 z-10 col-span-6 flex flex-col gap-4 bottom-0 border-l-6 border-blue-700 hover:drop-shadow-lg hover:border-blue-500 group"
            >
                <div className="p-6 md:p-7 flex flex-col gap-3">
                    <div className="flex flex-row justify-between">
                        {blok.location && <h4 className="font-light">{blok.location}</h4>}
                        {date && <h4 className="font-light">{date}</h4>}
                    </div>
                    {blok.name && <h3 className="md:text-2xl text-blue-700 font-bold group-hover:text-blue-500">{blok.name}</h3>}
                </div>
            </a>
            <Overlay blok={blok} isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    )
}

export default EventCard