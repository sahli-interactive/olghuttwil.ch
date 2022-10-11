import React from 'react'
import { StoryblokComponent } from "@storyblok/react"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleDollarToSlot } from "@fortawesome/pro-regular-svg-icons"

const Footer = ({ blok }) => {
    return (
        <nav className="bg-blue-500 border-blue-700 mt-24 h-fit py-14">

            <div className="grid grid-cols-12 gap-16 text-white container">
                <div className="col-start-1 col-span-3 flex flex-col gap-4">
                    <div className="flex flex-row flex-wrap gap-4">
                        <FontAwesomeIcon icon={faCircleDollarToSlot} className="h-8 col-start-3" />
                        <h3>{blok.footer_title}</h3>
                    </div>
                    <div className="relative aspect-square w-32">
                        <Image
                            src={blok.picture.filename}
                            alt={blok.picture.alt}
                            layout="fill"
                            objectFit="cover"
                            placeholder="blur"
                            blurDataURL={blok.picture.filename + '/m/50x0'}
                            className=""
                        />
                    </div>
                    <p>{blok.text}</p>
                </div>
                <div className="col-start-4 col-span-9 flex flex-wrap gap-4">
                    {/* <pre>{JSON.stringify(blok.partnerlogo_grid, null, 2)}</pre> */}
                    {blok.partnerlogo_grid && blok.partnerlogo_grid.map(blok => (
                        <StoryblokComponent key={blok._uid} blok={blok} />
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Footer