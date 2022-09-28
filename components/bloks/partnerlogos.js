import { StoryblokComponent } from "@storyblok/react"

function Partnerlogos({ blok }) {
    return (
        <div className="grid">
        {blok.title && <h4 className="text-white text-base font-light">{blok.title}</h4>}
        <div className="relative aspect-square bg-white h-32 rounded-50">
            {blok.partnerlogo && blok.partnerlogo.map(blok => (
                <StoryblokComponent key={blok._uid} blok={blok} />
            ))}
        </div>
    </div>
    )
}
export default Partnerlogos

