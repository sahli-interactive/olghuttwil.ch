
import { StoryblokComponent } from "@storyblok/react"

function News({ blok }) {
    return (
        <>
            <header className="container h-80 pt-48 grid grid-cols-12 gap-4 mt-6">
                {blok.headline && <h1 className="col-start-1">{blok.headline}</h1>}
            </header>
            <main>
                <div className="container col-span-12 mt-4 col-start-2 grid grid-cols-10 gap-4">
                    {blok.news_cards && blok.news_cards.map(blok => (
                        <StoryblokComponent key={blok._uid} blok={blok} />
                    ))}
                </div>
            </main>
        </>
    )
}

export default News