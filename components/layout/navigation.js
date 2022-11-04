import React from 'react'
import Link from 'next/link'
import Logo from "./logo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark } from "@fortawesome/pro-regular-svg-icons"
import { StoryblokComponent } from "@storyblok/react"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

function NavLink({ blok, currentStory }) {
    return (
        <Link href={blok.link.story ? blok.link.story.full_slug : '#'}>
            <a className="p-2 font-semibold">
                <span className={`px-2 border-l-3${currentStory.full_slug === blok.link.story?.full_slug ? ' border-blue-700 text-blue-700' : ' border-transparent hover:text-blue-500'}`}>
                    {blok.link.story?.name}
                </span>
            </a>
        </Link>
    )
}

function Navigation({ global, currentStory }) {
    const [isOpen, setIsOpen] = useState(false)

    const router = useRouter()

    useEffect(() => {
		router.events.on('routeChangeComplete', () => setIsOpen(false))
		return () => {
			router.events.off('routeChangeComplete', () => setIsOpen(false))
		}
	})
    return (
        <nav className="absolute top-0 left-0 right-0 mx-6 border-x-6 border-blue-700 bg-white shadow-xl z-20">
            <div className="relative flex flex-row justify-between items-center p-6 md:px-12 bg-white z-10">
                <a href="../home">
                    <Logo />
                </a>
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden relative w-6 h-6 inline-flex justify-center items-center">
                    <span className="sr-only">{isOpen ? 'Navigation schliessen' : 'Navigation öffnen'}</span>
                    <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="h-6" />
                </button>
                <div className="hidden md:flex justify-between items-center gap-6">
                    {global.content.nav_links?.map(blok => (
                        <NavLink key={blok._uid} blok={blok} currentStory={currentStory} />
                    ))}
                    {global.content.nav_button.map(blok => (
                        <StoryblokComponent key={blok._uid} blok={blok} />
                    ))}
                </div>
            </div>
            <div className={`absolute flex md:hidden flex-col justify-between gap-6 -left-1 -right-1 p-6 border-x-4 border-blue-700 bg-white transform transition-transform duration-300${isOpen ? ' translate-y-0' : ' -translate-y-full'}`}>
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