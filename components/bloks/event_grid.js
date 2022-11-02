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
            <div className="grid grid-cols-12 gap-4 mt-6 flex-wrap container">
                <div className="col-span-12 col-start-1">
                    {blok.headline && <h2 className="font-bold">{blok.headline}</h2>}
                    <div className="flex flex-wrap gap-4 mt-8 mb-4 overflow-hidden">
                        <button onClick={() => setActiveTag(null)} className={`btn btn-secundary bg-white ${activeTag === null ? ' bg-yellow border-4 border-yellow' : ' border-blue-700 border-4'}`}>Alle</button>
                        {blok.tags && blok.tags.map((tag, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTag(tag)}
                                className={`btn btn-secundary bg-white ${tag === activeTag ? 'bg-yellow border-4 border-yellow' : ' border-blue-700 border-4'}`}
                            >
                                {tagStrings[tag]}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="col-span-12 grid grid-cols-12 md:items-stretch gap-4">
                    {blok.event && blok.event.filter(blok => blok.tag === activeTag || !activeTag).map(blok => (
                        <div key={blok._uid} className="col-span-12 md:col-span-4">
                            <StoryblokComponent blok={blok} />
                        </div>
                    ))}</div>
                </div>
           
        </>
    )
}

export default EventGrid