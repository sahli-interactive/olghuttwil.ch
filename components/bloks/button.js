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
      <a target='_blank' className={`btn ${blok.is_secondary ? 'btn-secondary':'btn-primary'}`}>
        {blok.label}
      </a>
      </Link>
    )
  }
  return (
    <Link href={link}>
    <a  className={`btn ${blok.is_secondary ? 'btn-secondary':'btn-primary'}`}>
      {blok.label}
    </a>
    </Link>
  )
}

export default Button