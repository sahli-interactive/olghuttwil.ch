function Button({ blok }) {
  return (
    <a href={blok.link.linktype === 'story' ? blok.link.cached_url : blok.link.cached_url} className="p-4 text-white bg-blue-500 rounded-3xl w-fit">
      {blok.label}
    </a>
  )
}

export default Button