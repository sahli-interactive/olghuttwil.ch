import { StoryblokComponent } from "@storyblok/react"
import { useState } from "react"

function ProductGrid({ blok }) {

    return (
        <div className=" mt-4 container grid grid-cols-12 gap-4"> 
                {blok.product && blok.product.map(blok => (
                    <StoryblokComponent key={blok._uid} blok={blok} />
                    ))} 
                </div>
    )
}

export default ProductGrid