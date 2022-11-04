import { StoryblokComponent } from "@storyblok/react"

function TeamGrid({ blok }) {
    return (
        <>
            <div className="grid grid-cols-12 mb-12 gap-4 md:gap-6">
                <div className="col-span-12">
                    {blok.headline && <h2>{blok.headline}</h2>}
                </div>
                <div className="col-span-12 grid grid-cols-12 gap-4 md:gap-6"> 
                {blok.card && blok.card.map(blok => (
                    <StoryblokComponent key={blok._uid} blok={blok} />
                    ))} 
                </div>
            </div>
        </>
    )
}

export default TeamGrid