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
        <section className="grid grid-cols-12">
            <div className="col-span-6 flex flex-col gap-4">
                {blok.headline_1 && <h2>{blok.headline_1}</h2>}
                {events.content.events[0].event.map(blok => (
                    <StoryblokComponent key={blok._uid} blok={blok} />
                ))}
            </div>
        </section>
        {eventCard[0] && <Overlay blok={eventCard[0]} />}
        </>
    )
}

export default EventTeaser