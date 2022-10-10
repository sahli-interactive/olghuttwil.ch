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
    console.log(activeTag)
    return (
        <>
            <div className="grid grid-cols-12 gap-4 mt-6 flex-wrap container">
                <div className="col-span-12 col-start-1">
                    {blok.headline && <h2 className="h2 text-3xl font-bold">{blok.headline}</h2>}
                    <div className="flex gap-4 mt-8 mb-4">
                        <button onClick={() => setActiveTag(null)} className={`px-6  py-4 whitespace-nowrap rounded-full flex inline-flex bg-white hover:bg-yellow text-blue-700 h-14 font-semibold ${activeTag === null ? ' bg-yellow drop-shadow-lg' : ' border-blue-700 border-3'}`}>Alle</button>
                        {blok.tags && blok.tags.map((tag, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTag(tag)}
                                className={`px-6 py-4 whitespace-nowrap rounded-full flex inline-flex bg-white hover:bg-yellow text-blue-700 h-14 font-semibold ${tag === activeTag ? 'bg-yellow drop-shadow-lg' : ' border-blue-700 border-3'}`}
                            >
                                {tagStrings[tag]}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="col-span-12 col-start-1 grid grid-cols-12 items-stretch gap-4">
                    {blok.event && blok.event.filter(blok => blok.tag === activeTag || !activeTag).map(blok => (
                        <div key={blok._uid} className="col-span-4">
                            <StoryblokComponent blok={blok} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default EventGrid