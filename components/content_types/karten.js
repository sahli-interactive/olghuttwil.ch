import { StoryblokComponent } from "@storyblok/react"

function Karten({ blok }) {
  return (
    <>
        {blok.body && blok.body.map(blok => (
          <StoryblokComponent key={blok._uid} blok={blok} />
        ))}
    </>
  )
  console.log("1")
}

export default Karten