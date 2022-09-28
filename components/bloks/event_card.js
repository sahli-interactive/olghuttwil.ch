import dayjs from 'dayjs'
import 'dayjs/locale/de'

function EventCard({ blok }) {
    const date = dayjs(blok.date).locale('de-ch').format('dd, DD.MM.YYYY')
    return (
        <a href={'?eventId=' + blok._uid} className="relative bg-white rounded-br-50 z-10  flex flex-col h-full gap-4 bottom-0 left-0 border-l-4 border-blue-700 hover:drop-shadow-lg hover:border-blue-500 hover:text-blue-500">
            <div className="p-8 flex flex-col gap-3">
                <div className="flex flex-row justify-between">
                    {blok.location && <h4 className="h4 text-base font-light">{blok.location}</h4>}
                    {date && <h4 className="h4 text-base font-light">{date}</h4>}
                </div>
                {blok.name && <h3 className="text-2xl text-blue-700 hover:text-blue-500 font-bold">{blok.name}</h3>}
            </div>
        </a>
    )
}

export default EventCard