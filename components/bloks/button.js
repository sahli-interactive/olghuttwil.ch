import Link from "next/link"

function Button({ blok }) {
  let link = blok.link.url || '#'
  if (blok.link.email) {
    link = 'mailto:' + blok.link.email
  }
  if (blok.link.story) {
    link = '/' + blok.link.story.full_slug
  }
  return (
    <Link href={link}>
    <a  className={`px-6 py-4 whitespace-nowrap rounded-full inline-flex w-fit ${blok.is_secondary ? 'border-blue-700 border-3 text-blue-700':'text-white bg-blue-500'}`}>
      {blok.label}
    </a>
    </Link>
  )
}

export default Button