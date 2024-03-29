import { StoryblokComponent } from "@storyblok/react"

function Kontakt({ blok }) {
  return (
    <>
      <header className="container mt-40 grid grid-cols-12 gap-4 items-center">
        {blok.headline && <h1 className="col-start-1 mb-8">{blok.headline}</h1>}
      </header>
      <main className="container">
        {blok.team && blok.team.map(blok => (
          <StoryblokComponent key={blok._uid} blok={blok} />
        ))}
      </main>
    </>
  )
}

export default Kontakt