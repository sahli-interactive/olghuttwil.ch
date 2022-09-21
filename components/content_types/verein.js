import { StoryblokComponent } from "@storyblok/react"

function Verein({ blok }) {
  return (
    <>
      {blok.header && blok.header.map(blok => (
        <StoryblokComponent key={blok._uid} blok={blok} />
      ))}
      <main>
        {blok.body && blok.body.map(blok => (
          <StoryblokComponent key={blok._uid} blok={blok} />
        ))}
      </main>
    </>
  )
}

export default Verein