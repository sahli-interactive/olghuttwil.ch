import React from 'react'
import Link from 'next/link'
import Logo from "./logo"
import { StoryblokComponent } from "@storyblok/react"

const Navigation = ({ global, currentStory }) => (
    <nav className="top-0 right-0 left-0 flex justify-between items-center gap-6 bg-white border-blue-700 h-24 px-12 mx-6 border-x-4 absolute z-20">
        <a href="../home"><Logo /></a>
        <div className="flex justify-between items-center gap-6">
            {global.content.nav_links?.map((nav_link, index) => (
                <Link key={index} href={nav_link.story ? nav_link.link.story.full_slug : '#'}>
                    <a className="p font-semibold active:border-l-4 active:border-blue-500 hover:text-blue-500 px-4">
                        {nav_link.link.story?.name}
                    </a>
                </Link>
            ))}
            {global.content.nav_button.map(blok => (
                <StoryblokComponent key={blok._uid} blok={blok} />
            ))}
        </div>
    </nav>
)

export default Navigation