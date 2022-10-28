import React from 'react'
import Link from 'next/link'
import Logo from "./logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/pro-regular-svg-icons"
import { StoryblokComponent } from "@storyblok/react"

function NavLink({ blok, currentStory }) {
    return (
        <Link href={blok.link.story ? blok.link.story.full_slug : '#'}>
            <a className="p-2 font-semibold">
                <span className={`px-2 border-l-4${currentStory.full_slug === blok.link.story?.full_slug ? ' border-blue-700 text-blue-700' : ' border-transparent hover:text-blue-500'}`}>
                    {blok.link.story?.name}
                </span>
            </a>
        </Link>
    )
}

function Navigation({ global, currentStory }) {
    return (
        <nav className="top-0 right-0 left-0 py-6 flex flex-col justify-between items-left gap-6 bg-white border-blue-700 hover:border-blue-500 h-fit md:h-14 md:h-24 px-6 md:px-12 mx-6 border-x-4 absolute z-20">
        <div className="flex flex-row justify-between items-center">  
            <a href="../home"><Logo /></a>

            <div className="hidden md:flex flex-row justify-between items-center gap-6">
                {global.content.nav_links?.map(blok => (
                    <NavLink key={blok._uid} blok={blok} currentStory={currentStory} />
                ))}
                {global.content.nav_button.map(blok => (
                    <StoryblokComponent key={blok._uid} blok={blok} />
                ))}
            </div>



            <button onClick={() => setIsOpen(false)} className="md:hidden relative">
                <span className="sr-only">Schliessen</span>
                <FontAwesomeIcon icon={faXmark} className="h-6" />
            </button>

</div>
            <div className="flex md:hidden flex-col justify-between items-left gap-6">
                {global.content.nav_links?.map(blok => (
                    <NavLink key={blok._uid} blok={blok} currentStory={currentStory} />
                ))}
                {global.content.nav_button.map(blok => (
                    <StoryblokComponent key={blok._uid} blok={blok} />
                ))}
            </div>

        </nav>
    )
}

export default Navigation