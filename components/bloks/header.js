import { StoryblokComponent } from "@storyblok/react"
import Image from "next/image"

function Header({ blok }) {
  return (
    <header className={`relative p-6 bg-yellow${blok.picture?.filename ? ' h-screen' : ''}`}>
      {blok.picture?.filename && (
          <Image
            src={blok.picture.filename}
            alt={blok.picture.alt}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={blok.picture.filename + '/m/50x0'}
          />
      )}
      
      <div className="grid grid-cols-12 gap-4 container h-full">
      <div className="mt-16 self-end col-span-6 p-12 bg-yellow rounded-r-50 z-10  flex flex-col h-fit gap-4 bottom-0 left-0">
        {blok.headline && <h1 className="h1 text-4xl font-bold">{blok.headline}</h1>}
        {blok.lead && <p className="text-lg">{blok.lead}</p>}
        {blok.buttons && blok.buttons.map(blok => (
          <StoryblokComponent key={blok._uid} blok={blok} />
        ))}
      </div>
      </div>
    </header>
  )
}

export default Header