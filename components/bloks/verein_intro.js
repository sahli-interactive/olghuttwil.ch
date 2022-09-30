import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useContext } from "react";
import { ContactContext } from "../../pages/[...slug]";
import TeamCard from "./team_card";

const VereinIntro = ({ blok }) => {
    const contact = useContext(ContactContext)
    const contactPersons = blok.contact_persons.split(', ')
    return (
        <div className="grid grid-cols-12 gap-4 container" {...storyblokEditable(blok)}>
            <div className="mt-36 col-span-4 z-10  flex flex-col h-fit gap-4 bottom-0 left-0">
                {blok.title && <h1 className="h1 text-4xl font-bold">{blok.title}</h1>}
                {blok.text && <p className="text-lg">{blok.text}</p>}
                {blok.buttons && blok.buttons.map(blok => (
                    <StoryblokComponent key={blok._uid} blok={blok} />
                ))}
            </div>
            <div className="col-span-8 grid grid-cols-6 gap-4 mt-36">
                {contact.content.team.map(teamGrid =>
                    teamGrid.card.filter(teamCard => contactPersons.includes(teamCard.name)).map((teamCard, index) => (
                        <TeamCard key={index} blok={teamCard} />
                    ))
                )}
            </div>
        </div>
    )
}

export default VereinIntro