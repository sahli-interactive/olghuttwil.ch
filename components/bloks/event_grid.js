import { StoryblokComponent } from "@storyblok/react"
import { useState } from "react"

function EventGrid({ blok }) {
    const [activeTag, setActiveTag] = useState(null)
    const tagStrings = {
        trainings: 'Trainings',
        matchsInternal: 'Wettkämpfe (intern)',
        matchsExternal: 'Wettkämpfe (extern)',
        events: 'Anlässe',
    }

    return (
        <>
            <div className="grid grid-cols-12 gap-4 md:gap-6 mt-6 flex-wrap container">
                <div className="col-span-12 col-start-1">
                    {blok.headline && <h2 className="font-bold">{blok.headline}</h2>}
                    <div className="flex flex-wrap gap-4 mt-8 mb-4 overflow-hidden">
                        <button onClick={() => setActiveTag(null)} className={`btn btn-secondary${activeTag === null ? ' !text-black !bg-yellow !border-yellow' : ''}`}>Alle</button>
                        {blok.tags && blok.tags.map((tag, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTag(tag)}
                                className={`btn btn-secondary${tag === activeTag ? ' !text-black !bg-yellow !border-yellow' : ''}`}
                            >
                                {tagStrings[tag]}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="col-span-12 grid grid-cols-12 md:items-stretch gap-4 md:gap-6">
                    {blok.event && blok.event.filter(blok => blok.tag === activeTag || !activeTag).map(blok => (
                        <div key={blok._uid} className="col-span-12 md:col-span-4">
                            <StoryblokComponent blok={blok} />
                        </div>
                    ))}
                    </div>
            </div>

        </>
    )
}

export default EventGrid