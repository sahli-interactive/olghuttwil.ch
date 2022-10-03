import { StoryblokComponent } from "@storyblok/react"
import { useState } from 'react'
import { Dialog } from '@headlessui/react'


function Overlay({ blok }) {
    let [isOpen, setIsOpen] = useState(true)

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
                    <Dialog.Title className="h3">{blok.name}</Dialog.Title>
                    <Dialog.Description className="p mt-4">
                        <ul className="flex flex-col gap-3 mb-8">
                            <li><FontAwesomeIcon icon={faCalendarDay} className="h-18 col-start-2 mr-3" />
                                {date}</li>
                            <li><FontAwesomeIcon icon={faClock} className="h-18 col-start-2 mr-3" />
                                {time} <span>–</span> {blok.meeting_point}</li>
                            <li><FontAwesomeIcon icon={faLocation} className="h-18 col-start-2 mr-3" />
                                {blok.location}</li>
                            <li><FontAwesomeIcon icon={faUser} className="h-18 col-start-2 mr-3" />
                                {blok.contact}</li>
                            <li><FontAwesomeIcon icon={faBus} className="h-18 col-start-2 mr-3" />
                                {blok.transport}</li>
                        </ul>

                        {blok.button && blok.button.map(blok => (
                            <StoryblokComponent key={blok._uid} blok={blok} />
                        ))}
                    </Dialog.Description>
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}
export default Overlay