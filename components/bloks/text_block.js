import RichTextRenderer from "../helpers/rich-text-renderer"
import { storyblokEditable } from "@storyblok/react"

function TextBlock({ blok }) {
  return (
    <section className="container" {...storyblokEditable(blok)}>
      <div className="mt-8 col-span-full md:col-span-8 md:col-start-3">
        {blok.headline && <h2>{blok.headline}</h2>}
        {blok.text && (
          <div className="richtext md:columns-2 mt-4">
            <RichTextRenderer text={blok.text} />
          </div>
        )}
      </div>
    </section>
  )
}

export default TextBlock