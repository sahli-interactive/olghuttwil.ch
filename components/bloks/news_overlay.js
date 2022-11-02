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
            <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-stretch md:items-center min-h-full justify-center p-4">
                <Dialog.Panel className="p-8 bg-white rounded-50 grid grid-cols-7 gap-4 max-w-2xl justify-start">
                <button onClick={() => setIsOpen(false)} className="relative md:hidden col-span-full flex justify-end">
                            <span className="sr-only">Schliessen</span>
                            <FontAwesomeIcon icon={faXmark} className="h-6" />
                        </button>
                    <div className="col-span-7 md:col-span-3">
                        {blok.picture?.filename && (
                            <div className="relative aspect-square w-60 min-h-50">
                                <Image
                                    src={blok.picture.filename}
                                    alt={blok.picture.alt}
                                    layout="fill"
                                    objectFit="cover"
                                    placeholder="blur"
                                    blurDataURL={blok.picture.filename + '/m/50x0'}
                                    className="rounded-20"
                                />
                            </div>
                        )}
                    </div>

                    <div className="col-span-7 md:col-span-4 md:px-4">
                        <div className='flex justify-between'>
                        <Dialog.Title className="w-72 break-words">{blok.headline}</Dialog.Title>
                        <button onClick={() => setIsOpen(false)} className="relative hidden md:block">
                            <span className="sr-only">Schliessen</span>
                            <FontAwesomeIcon icon={faXmark} className="h-6" />
                        </button>
                        </div>
                        <Dialog.Description className="p mt-4 mb-8">{blok.overlay_text}</Dialog.Description>
                        <div className='flex gap-4 flex-col'>
                        {blok.button && blok.button.map(blok => (
                            <StoryblokComponent key={blok._uid} blok={blok} />
                        ))}
                        </div>
                    </div>
                    
                </Dialog.Panel>
            </div>
            </div>
        </Dialog>
    )
}
export default NewsOverlay