import { StoryblokComponent } from "@storyblok/react"
import Image from "next/image"

function Header({ blok }) {
  return (
    <header className={`relative py-8 bg-yellow${blok.picture?.filename ? ' h-screen' : ''}`}>
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
      <div className="container grid grid-cols-12 gap-4 h-full">
        <div className={`mt-16 self-end col-span-12 md:col-span-6 bg-yellow rounded-r-50 z-10  flex flex-col h-fit gap-4 bottom-0 left-0 ${blok.picture?.filename ? 'p-7 md:p-12' : 'px-0 py-12'}`}>
          {blok.headline && <h1 className="h1 md:text-4xl font-bold">{blok.headline}</h1>}
          {blok.lead && <p className="md:text-lg mb-9">{blok.lead}</p>}
          {blok.buttons && blok.buttons.map(blok => (
            <StoryblokComponent key={blok._uid} blok={blok} />
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header