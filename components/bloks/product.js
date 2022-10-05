import { storyblokEditable } from "@storyblok/react"
import { useState } from "react"
import MapFormOverlay from "./map_form_overlay"

function Product({ blok }) {
    let [isOpen, setIsOpen] = useState(null)
    return (
        <>
            <div className="col-span-4 flex flex-col gap-4 h-full rounded-br-50 border-l-4 p-10 border-yellow bg-white" {...storyblokEditable(blok)}>
                {blok.headline && <h3 className="text-2xl text-blue-700 font-bold">{blok.headline}</h3>}
                <div className="grid grid-cols-3 gap-2 mt-2">
                    <div>
                        <h4 className="text-base">Stand</h4>
                        {blok.year && <p>{blok.year}</p>}
                    </div>
                    <div>
                        <h4 className="text-base">Massstab</h4>
                        {blok.text && <p>{blok.text}</p>}
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mb-auto">
                    <h3 className="h4 col-span-full">Kartenpreise</h3>
                    <div>
                        <h4 className="text-base">1+</h4>
                        {blok.one_piece && <p>{blok.one_piece + ' CHF'}</p>}
                    </div>
                    <div>
                        <h4 className="text-base">10+</h4>
                        {blok.ten_pieces && <p>{blok.ten_pieces + ' CHF'}</p>}
                    </div>
                    <div>
                        <h4 className="text-base">100+</h4>
                        {blok.hundred_pieces && <p>{blok.hundred_pieces + ' CHF'}</p>}
                    </div>
                </div>
                <button
                    type="button"
                    onClick={() => setIsOpen(blok.headline)}
                    className="btn btn-secondary mt-4">
                    Karte Bestellen
                </button>
            </div>
            {isOpen !== null && <MapFormOverlay isOpen={isOpen} setIsOpen={setIsOpen} blok={blok} />}
        </>
    )
}

export default Product