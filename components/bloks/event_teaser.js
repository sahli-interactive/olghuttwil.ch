import Link from "next/link"
import { useContext } from "react"
import { EventsContext } from "../../pages/[...slug]"
import { StoryblokComponent } from "@storyblok/react"
import { useRouter } from "next/router"
import Overlay from "./overlay"

function EventTeaser({ blok }) {
    const events = useContext(EventsContext)
    const router = useRouter()
    const eventCard = events.content.events.map(blok => blok.event.find(blok => blok._uid === router.query.eventId))
    return (
        <>
        <section className="container grid grid-cols-12 gap-4">
            <div className="col-span-6 col-start-1 mt-16 flex flex-col gap-4">
                {blok.headline_1 && <h2>{blok.headline_1}</h2>}
                <div className="grid grid-rows-1 gap-4 h-full">
                {events.content.events[0].event.filter(blok => blok.tag === 'matchsExternal' || blok.tag === 'matchsInternal').slice(0, 2).map(blok => (
                    <StoryblokComponent key={blok._uid} blok={blok} />
                ))}
                </div>
            </div>
            <div className="col-span-6 col-start-7 mt-16 flex flex-col gap-4">
                {blok.headline_2 && <h2>{blok.headline_2}</h2>}
                <div className="grid grid-rows-2 gap-4 h-full">
                                {events.content.events[0].event.filter(blok => blok.tag === 'trainings').slice(0, 2).map(blok => (
                    <StoryblokComponent key={blok._uid} blok={blok} />
                ))}
                </div>
            </div>
        </section>
        {eventCard[0] && <Overlay blok={eventCard[0]} />}
        </>
    )
}

export default EventTeaser