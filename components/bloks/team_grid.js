function TeamGrid({ blok }) {
    return (
        <>
            {blok.headline && <h2 className="h1 text-4xl font-bold">{blok.headline}</h2>}
            <div className="">
                {blok.card && blok.card.map(blok => (
                    <StoryblokComponent key={blok._uid} blok={blok} />
                ))}
            </div>
        </>
    )
}

export default TeamGrid