import { StoryblokComponent } from "@storyblok/react"

function TeamGrid({ blok }) {
    return (
        <>
           
            <div className="grid grid-cols-12 gap-4 mt-6 max-w-7xl">
                <div className="col-span-10 col-start-3">
                    {blok.headline && <h2 className="h2 text-3xl font-bold">{blok.headline}</h2>}
                </div>
                <div className="col-span-10 col-start-3 grid grid-cols-10 gap-4"> 
                {blok.card && blok.card.map(blok => (
                    <StoryblokComponent key={blok._uid} blok={blok} />
                    ))} 
                </div>
            </div>
        </>
    )
}

export default TeamGrid