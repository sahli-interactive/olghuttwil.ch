import { Dialog } from '@headlessui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/pro-regular-svg-icons"
import { StoryblokComponent } from "@storyblok/react"
import Image from "next/image"


function NewsOverlay({ blok, isOpen, setIsOpen }) {
    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
        >
            <Dialog.Backdrop className="fixed inset-0 bg-black/20 z-10" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="p-8 bg-white rounded-50 grid grid-cols-7 gap-4 w-10/12 justify-start">
                    <div className="col-span-3">
                        {blok.picture?.filename && (
                            <div className="relative aspect-square">
                                <Image
                                    src={blok.picture.filename}
                                    alt={blok.picture.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    placeholder="blur"
                                    blurDataURL={blok.picture.filename + '/m/50x0'}
                                    className=" top-0 left-0 rounded-20"
                                />
                            </div>
                        )}
                    </div>

                    <div className="col-span-4 p-8">
                        <div className='flex justify-between'>
                        <Dialog.Title className="h3">{blok.headline}</Dialog.Title>
                        <button onClick={() => setIsOpen(false)} className="relative">
                            <span className="sr-only">Schliessen</span>
                            <FontAwesomeIcon icon={faXmark} className="h-6" />
                        </button>
                        </div>
                        <Dialog.Description className="p mt-4 mb-8">{blok.overlay_text}</Dialog.Description>
                        {blok.button && blok.button.map(blok => (
                            <StoryblokComponent key={blok._uid} blok={blok} />
                        ))}
                    </div>
                    
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}
export default NewsOverlay