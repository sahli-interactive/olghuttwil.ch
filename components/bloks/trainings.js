import { storyblokEditable, StoryblokComponent } from "@storyblok/react"

function Trainings({ blok }) {
    console.log(blok);
    return (
        <section className="container" {...storyblokEditable}>
            {blok.title && <h2 className="mt-8">{blok.title}</h2>}
            {blok.headline_season_1 && <h3 className="mt-4">{blok.headline_season_1}</h3>}
            {blok.tables_season_1 && blok.tables_season_1.map(blok =>
                <StoryblokComponent key={blok._uid} blok={blok} />
            )}
            {blok.headline_season_2 && <h3 className="mt-4">{blok.headline_season_2}</h3>}
            {blok.tables_season_2 && blok.tables_season_2.map(blok =>
                <StoryblokComponent key={blok._uid} blok={blok} />
            )}
        </section>
    )
}

export default Trainings