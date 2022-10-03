import { StoryblokComponent } from "@storyblok/react"

function Termine({ blok }) {
    return (
        <>
            {blok.header && blok.header.map(blok => (
                <StoryblokComponent key={blok._uid} blok={blok} />
            ))}
            {blok.events && blok.events.map(blok => (
                <StoryblokComponent key={blok._uid} blok={blok} />
            ))}
        </>
    )
}

export default Termine