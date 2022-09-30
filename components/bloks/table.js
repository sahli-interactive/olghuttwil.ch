import { storyblokEditable } from "@storyblok/react"

function Table({ blok }) {
    console.log(blok);
    return (
        <section className="mt-2" {...storyblokEditable}>
            {blok.headline && <h2>{blok.headline}</h2>}
            <table>
                <tbody>
                    {blok.table.tbody.map((tr, trIndex) => (
                        <tr key={trIndex} className="grid grid-cols-12 gap-4">
                            {tr.body.map((td, tdIndex) => (
                                <td key={tdIndex} className={tdIndex === 2 ? 'col-span-6' : 'col-span-3'}>{td.value} {tdIndex}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}

export default Table