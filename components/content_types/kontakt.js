import { StoryblokComponent } from "@storyblok/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMailbox } from "@fortawesome/pro-regular-svg-icons"

function Kontakt({ blok }) {
  return (
    <>
      <header className="h-80 pt-48 grid grid-cols-12 gap-4 mt-6 max-w-7xl">
        <FontAwesomeIcon icon={faMailbox} className="h-8 col-start-3" />
        {blok.headline && <h1 className="col-start-4">{blok.headline}</h1>}
      </header>
      <main>
        {blok.team && blok.team.map(blok => (
          <StoryblokComponent key={blok._uid} blok={blok} />
        ))}
      </main>
    </>
  )
}

export default Kontakt