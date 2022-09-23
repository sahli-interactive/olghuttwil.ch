import { StoryblokComponent } from "@storyblok/react"

function EventGrid({ blok }) {
    return (
        <>

            <div className="grid grid-cols-12 gap-4 mt-6 flex-wrap">
                <div className="col-span-10 col-start-2">
                    {blok.headline && <h2 className="h2 text-3xl font-bold">{blok.headline}</h2>}
                </div>
                <div className="col-span-12 col-start-2 grid grid-cols-10 items-stretch gap-4">
                    {blok.event && blok.event.map(blok => (
                        <div key={blok._uid} className="col-span-3">
                            <StoryblokComponent blok={blok} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default EventGrid