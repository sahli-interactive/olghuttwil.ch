function TeamCard({ blok }) {
    return (
        <div className="col-span-6 p-12 bg-yellow rounded-r-3xl z-10  flex flex-col h-fit gap-4 bottom-0 left-0">
            {blok.name && <h1 className="h1 text-4xl font-bold">{blok.name}</h1>}
            {blok.function && <p className="text-lg">{blok.function}</p>}
            {blok.buttons && blok.buttons.map(blok => (
                <StoryblokComponent key={blok._uid} blok={blok} />
            ))}
            {blok.button && <a href="{blok.button.link}" className="text-lg">{blok.button.label}</a>}
        </div>
    )
}

export default TeamCard