import { StoryblokComponent } from "@storyblok/react"

function Header({ blok }) {
  return (
    <header className="grid grid-cols-12 gap-4">
      {blok.headline && <h1>{blok.headline}</h1>}
      {blok.lead && <p>{blok.lead}</p>}
      <img src={blok.picture.filename} />
    </header>
  )
}

export default Header