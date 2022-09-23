import { StoryblokComponent } from "@storyblok/react"
import { useRouter } from "next/router"
import Overlay from "../bloks/overlay"

function Termine({ blok }) {
    const router = useRouter()
    const eventCard = blok.events.map(blok => blok.event.find(blok => blok._uid === router.query.eventId))
    console.log(eventCard)

    return (
        <>
            {blok.header && blok.header.map(blok => (
                <StoryblokComponent key={blok._uid} blok={blok} />
            ))}
            {blok.events && blok.events.map(blok => (
                <StoryblokComponent key={blok._uid} blok={blok} />
            ))}
            {eventCard[0] && <Overlay blok={eventCard[0]} />}
        </>
    )
}

export default Termine