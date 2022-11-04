import { StoryblokComponent } from "@storyblok/react"
import { useState } from "react"
import Search from "./Search"

function ProductGrid({ blok }) {
    const [query, setQuery] = useState('')

    const regExp = new RegExp(query, 'i')
    const filteredProducts = blok.products?.filter(item => item.headline.match(regExp))
    const filteredLength = filteredProducts.length !== blok.products.length ? filteredProducts.length : null
    return (
        <div className="mt-8 container grid grid-cols-12 gap-4 md:gap-6">
            <div className="col-span-full text-sm">
                {typeof filteredLength === 'number' && <span>{filteredLength} von </span>}{blok.products.length} Einträge
            </div>
            <div className="col-span-full">
                <Search name="productSearch" placeholder="Karten suchen" query={query} setQuery={setQuery} />
            </div>
            {typeof filteredLength === 'number' && filteredLength === 0 ? (
                <div className="col-span-full">Ups! Keine Einträge gefunden.</div>
            ) : (
                filteredProducts && filteredProducts.map(blok => (
                    <StoryblokComponent key={blok._uid} blok={blok} />
                ))
            )}
        </div>
    )
}

export default ProductGrid