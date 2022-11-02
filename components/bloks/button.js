import Link from "next/link"

function Button({ blok }) {
  let link = blok.link.url || '#'
  if (blok.link.email) {
    link = 'mailto:' + blok.link.email
  }
  if (blok.link.story) {
    link = '/' + blok.link.story.full_slug
  }
  if (blok.link.url) {
    return (
      <Link href={link}>
      <a target='_blank' className={`px-6 py-3 whitespace-nowrap rounded-full inline-flex w-fit font-semibold ${blok.is_secondary ? 'border-blue-700 hover:border-blue-500 bg-white border-4 text-blue-700':'border-4 border-blue-700 hover:border-blue-500 text-white bg-blue-700 hover:bg-blue-500'}`}>
        {blok.label}
      </a>
      </Link>
    )
  }
  return (
    <Link href={link}>
    <a  className={`px-6 py-3 whitespace-nowrap rounded-full inline-flex w-fit font-semibold ${blok.is_secondary ? 'border-blue-700 hover:border-blue-500 bg-white border-4 text-blue-700':'border-4 border-blue-700 hover:border-blue-500 text-white bg-blue-700 hover:bg-blue-500'}`}>
      {blok.label}
    </a>
    </Link>
  )
}

export default Button