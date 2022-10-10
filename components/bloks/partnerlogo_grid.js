import { StoryblokComponent } from "@storyblok/react"

function PartnerlogoGrid({ blok }) {
    return (
        <div>
            {blok.title && <h4 className="text-white text-base font-light">{blok.title}</h4>}
            <div className="mt-4 flex justify-between gap-4">
                {blok.partnerlogo && blok.partnerlogo.map(blok => (
                    <div key={blok._uid} className="relative aspect-square bg-white border-8 border-white h-32 rounded-50">
                        <StoryblokComponent blok={blok} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default PartnerlogoGrid

