import { useContext } from "react"
import { NewsContext } from "../../pages/[...slug]"
import { StoryblokComponent } from "@storyblok/react"

function NewsTeaser({ blok }) {
    const news = useContext(NewsContext)
    return (
        <section className="mt-16 col-start-1 grid grid-cols-12 gap-4 md:gap-6">
            {blok.headline && <h2 className="col-start-1 md:text-3xl">{blok.headline}</h2>}
            <div className="col-start-1 grid grid-cols-12 col-span-12 gap-4 md:gap-6">
                {news.content.news_cards && news.content.news_cards.slice(0, 3).map(blok => (
                    <StoryblokComponent key={blok._uid} blok={blok} />
                ))}
            </div>
            <div className="col-span-full">
                {blok.button && blok.button.map(blok => (
                    <StoryblokComponent key={blok._uid} blok={blok} />
                ))}
            </div>
        </section>
    )
}

export default NewsTeaser