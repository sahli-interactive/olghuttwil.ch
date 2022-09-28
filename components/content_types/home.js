import { StoryblokComponent } from "@storyblok/react"

function Home({ blok }) {
  return (
    <>
      {blok.header && blok.header.map(blok => (
        <StoryblokComponent key={blok._uid} blok={blok} />
      ))}
      <main className="container">
        {blok.body && blok.body.map(blok => (
          <StoryblokComponent key={blok._uid} blok={blok} />
        ))}
      </main>
    </>
  )
}

export default Home