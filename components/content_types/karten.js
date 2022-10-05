import { StoryblokComponent } from "@storyblok/react"

function Karten({ blok }) {
  return (
    <main>
        {blok.body && blok.body.map(blok => (
          <StoryblokComponent key={blok._uid} blok={blok} />
        ))}
    </main>
  )
}

export default Karten