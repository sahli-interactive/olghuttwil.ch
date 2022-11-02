import { StoryblokComponent } from "@storyblok/react"

function PartnerlogoGrid({ blok }) {
    return (
        <div className="col-span-12 md:col-span-6 col-start-1">
            {blok.title && <h4 className="text-white text-base font-light">{blok.title}</h4>}
            <div className="mt-4 grid grid-cols-12 md:grid-cols-6 gap-4 md:gap-8">
                {blok.partnerlogo && blok.partnerlogo.map(blok => (
                    
                        <StoryblokComponent key={blok._uid} blok={blok} />
                    
                ))}
            </div>
        </div>
    )
}
export default PartnerlogoGrid

