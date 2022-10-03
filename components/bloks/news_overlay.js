import { Dialog } from '@headlessui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/pro-regular-svg-icons"
import { StoryblokComponent } from "@storyblok/react"


function NewsOverlay({ blok, isOpen, setIsOpen }) {
    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
        >
            <Dialog.Backdrop className="fixed inset-0 bg-black/20 z-10" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <Dialog.Panel className="p-8 w-fit max-w-sm rounded-50 bg-white relative">
                    <button onClick={() => setIsOpen(false)} className="absolute right-8">
                        <span className="sr-only">Schliessen</span>
                        <FontAwesomeIcon icon={faXmark} className="h-6" />
                    </button>
                    <Dialog.Title className="h3">{blok.headline}</Dialog.Title>
                    <Dialog.Description className="p mt-4 mb-8">{blok.overlay_text}</Dialog.Description>
                    {blok.button && blok.button.map(blok => (
                        <StoryblokComponent key={blok._uid} blok={blok} />
                        ))}
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}
export default NewsOverlay