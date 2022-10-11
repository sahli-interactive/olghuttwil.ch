import { StoryblokComponent } from "@storyblok/react"

function PartnerlogoGrid({ blok }) {
    return (
        <div>
            {blok.title && <h4 className="text-white text-base font-light">{blok.title}</h4>}
            <div className="mt-4 flex justify-between gap-4">
                {blok.partnerlogo && blok.partnerlogo.map(blok => (
                    
                        <StoryblokComponent key={blok._uid} blok={blok} />
                    
                ))}
            </div>
        </div>
    )
}
export default PartnerlogoGrid

