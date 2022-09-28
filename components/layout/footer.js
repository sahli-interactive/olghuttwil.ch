import React from 'react'
import { StoryblokComponent } from "@storyblok/react"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleDollarToSlot } from "@fortawesome/pro-regular-svg-icons"

const Footer = ({ blok }) => {
    return (
        <nav className="w-screen flex justify-between gap-6 bg-blue-500 border-blue-700 mt-24 h-fit px-40 py-14">

            <div className="flex justify-between flex-col items-start gap-6 text-white">
                <div className="flex gap-4">
                    <FontAwesomeIcon icon={faCircleDollarToSlot} className="h-8 col-start-3" />
                    <h3>{blok.title}</h3>
                </div>
                <div className="relative aspect-square w-32">
                    <Image
                        src={blok.picture.filename}
                        alt={blok.picture.alt}
                        layout="fill"
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL={blok.picture.filename + '/m/50x0'}
                        className="top-0 left-0 w-full h-3/5"
                    />
                </div>
                <p>{blok.text}</p>
            </div>
                {blok.partnerlogos && blok.partnerlogos.map(blok => (
                    <StoryblokComponent key={blok._uid} blok={blok} />
                ))}
        </nav>
    )
}

export default Footer