import React from 'react'
import { StoryblokComponent } from "@storyblok/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPiggyBank } from "@fortawesome/pro-regular-svg-icons"

const Footer = ({ blok }) => {
    return (
        <nav className="bg-blue-500 border-blue-700 mt-24 h-fit py-14">

            <div className="md:grid grid-cols-12 gap-4 text-white container">
                <div className="col-start-1 col-span-12 md:col-span-6 grid grid-cols-12 md:grid-cols-6 gap-4 md:mt-0 mt-8">
                    {/* <pre>{JSON.stringify(blok.partnerlogo_grid, null, 2)}</pre> */}
                    {blok.partnerlogo_grid && blok.partnerlogo_grid.map(blok => (
                        <StoryblokComponent key={blok._uid} blok={blok} />
                    ))}
                </div>
                <div className="col-start-1 col-span-12 md:col-span-4 flex flex-col gap-4 mt-8 md:mt-0">
                    <div className="flex flex-row flex-wrap gap-4">
                        <FontAwesomeIcon icon={faPiggyBank} className="h-6 col-start-3" />
                        <h3>{blok.footer_title}</h3>
                    </div>
                    <p className=''>{blok.text}</p>
                </div>


            </div>

        </nav>
    )
}

export default Footer