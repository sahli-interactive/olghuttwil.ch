import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useContext } from "react";
import { ContactContext } from "../../pages/[...slug]";
import TeamCard from "./team_card";

const VereinIntro = ({ blok }) => {
    const contact = useContext(ContactContext)
    const contactPersons = contact.content.team.map(teamGrid => {
        teamGrid.card.map(teamCard => {
            return 'hallo'
        })
    })
    return (
        <div className="grid grid-cols-12 gap-4 container">
            <div className="mt-36 col-span-6 p-12 z-10  flex flex-col h-fit gap-4 bottom-0 left-0">
                {blok.title && <h1 className="h1 text-4xl font-bold">{blok.title}</h1>}
                {blok.text && <p className="text-lg">{blok.text}</p>}
                {blok.buttons && blok.buttons.map(blok => (
                    <StoryblokComponent key={blok._uid} blok={blok} />
                ))}
                {contact.content.team.map(teamGrid => {
                    teamGrid.card.map(teamCard => {
                        return <TeamCard blok={teamCard} />
                    })
                })}
                <pre>{JSON.stringify(contact, null, 2)}</pre>
            </div>
        </div>
    )
}

export default VereinIntro