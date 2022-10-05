function Product({ blok }) {

    return (
        <>
            <a
                href="#"
                className="col-span-4 h-fit relative bg-white rounded-br-50 z-10  flex flex-col h-full gap-4 bottom-0 left-0 border-l-4 border-yellow"
            >
                <div className="px-8 py-12 flex flex-col">
                    {blok.headline && <h3 className="text-2xl text-blue-700 font-bold">{blok.headline}</h3>}
                    <div className="flex flex-col gap-2 mt-6">
                    <div className="flex flex-row gap-12">
                        <h4 className="h4 text-base font-bold">Stand</h4>
                        <h4 className="h4 text-base font-bold">Massstab</h4>
                    </div>
                    <div className="flex flex-row gap-14">
                        {blok.year && <p className=" text-base font-light">{blok.year}</p>}
                        {blok.text && <p>{blok.text}</p>}
                    </div>
</div>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                        <h4 className="font-bold col-span-1">1+</h4>
                        <h4 className="font-bold col-span-1">10+</h4>
                        <h4 className="font-bold col-span-1">100+</h4>
                        
                        {blok.one_piece && <p className="p col-span-1">{blok.one_piece + ' CHF'}</p>}
                        {blok.ten_pieces && <p className="p col-span-1">{blok.ten_pieces + ' CHF'}</p>}
                        {blok.hundred_pieces && <p className="p col-span-1">{blok.hundred_pieces + ' CHF'}</p>}
                    </div>
                   
    <a  className="px-6 py-4 whitespace-nowrap rounded-full inline-flex w-fit h-14 font-semibold border-blue-700 hover:border-blue-500 bg-white border-3 text-blue-700 mt-8 hover:drop-shadow-lg">
      Bestellen
    </a>
    
                </div>
            </a>
        </>
    )
}

export default Product