import { StoryblokComponent } from "@storyblok/react"

function Kontakt({ blok }) {
  return (
      <>
      <header>
        {blok.headline && <h1 className="h1 text-4xl font-bold">{blok.headline}</h1>}
        </header>
        <body>
        {blok.team_grid && blok.team_grid.map(blok => (
          <StoryblokComponent key={blok._uid} blok={blok} />
        ))}
        </body>
      </>
  )
}

export default Kontakt