import 'dayjs/locale/de'
import RichTextRenderer from "../helpers/rich-text-renderer"
import { StoryblokComponent } from "@storyblok/react"

function Infobox({ blok }) {
    return (
        <>
            <div className="grid grid-cols-12 gap-4">
                <div className="md:col-start-3 col-span-12 md:col-span-8 mt-6 relative bg-yellow rounded-br-50 z-10 p-7 md:p-8 flex flex-col">
                    <div className="mb-6">
                        {blok.name && <h3 className="md:text-2xl mb-3 font-bold">{blok.name}</h3>}
                        {blok.text && (
                            <div className="richtext">
                                <RichTextRenderer text={blok.text} />
                            </div>
                        )}
                    </div>
                    {blok.buttons && blok.buttons.map(blok => (
                        <StoryblokComponent key={blok._uid} blok={blok} />
                    ))}
                </div>
                <div className="md:col-start-3 mt-6 col-span-12 md:col-span-8 grid md:grid-cols-6 h-min gap-4">
                    {blok.event_card && blok.event_card.map(blok => (
                        <StoryblokComponent key={blok._uid} blok={blok} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Infobox