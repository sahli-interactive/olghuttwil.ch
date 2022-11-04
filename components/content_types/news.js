import { useState } from "react"
import { StoryblokComponent } from "@storyblok/react"
import Search from "../bloks/Search"

function News({ blok }) {
    const [query, setQuery] = useState('')

    const regExp = new RegExp(query, 'i')
    const filteredNews = blok.news_cards?.filter(item => item.headline.match(regExp))
    const filteredLength = filteredNews.length !== blok.news_cards.length ? filteredNews.length : null
    return (
        <>
            <header className="container pt-48 grid grid-cols-12 mb-6">
                {blok.headline && <h1 className="col-span-8">{blok.headline}</h1>}
            </header>
            <main>
                <div className="container col-span-12 mt-4 col-start-2 grid grid-cols-12 gap-4 md:gap-6">
                    <div className="col-span-full text-sm">
                        {typeof filteredLength === 'number' && <span>{filteredLength} von </span>}{blok.news_cards.length} Einträge
                    </div>
                    <div className="col-span-full">
                        <Search name="newsSearch" placeholder="News-Beitrag suchen" query={query} setQuery={setQuery} />
                    </div>
                    {typeof filteredLength === 'number' && filteredLength === 0 ? (
                        <div className="col-span-full">Ups! Keine Einträge gefunden.</div>
                    ) : (
                        filteredNews && filteredNews.map(blok => (
                            <StoryblokComponent key={blok._uid} blok={blok} />
                        ))
                    )}
                </div>
            </main>
        </>
    )
}

export default News