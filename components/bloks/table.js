import { storyblokEditable } from "@storyblok/react"

function Table({ blok }) {
    return (
        <section className="mt-4 md:mt-2" {...storyblokEditable}>
            {blok.headline && <h4 className="font-bold">{blok.headline}</h4>}
            <table>
                <tbody>
                    {blok.table.tbody.map((tr, trIndex) => (
                        <tr key={trIndex} className="p grid grid-cols-12 gap-4 mt-4">
                            {tr.body.map((td, tdIndex) => (
                                <td key={tdIndex} className={tdIndex === 2 ? 'col-span-12 md:col-span-6' : 'col-span-6 md:col-span-3 font-bold'}>{td.value}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default Table