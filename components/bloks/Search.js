import { faMagnifyingGlass, faXmark } from "@fortawesome/pro-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Search({ name, placeholder, query, setQuery }) {
  function handleChange(event) {
    setQuery(event.target.value)
  }
  return (
    <div className="relative flex items-center w-72 max-w-full">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute ml-6 text-blue-700" />
      <input
        type="search"
        name={name}
        id={name}
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        className="w-full pr-16 pl-14 py-3 rounded-full bg-white focus:outline-none focus:ring-3 focus:ring-blue-500"
      />
      {query && (
        <button onClick={() => setQuery('')} className="absolute btn right-2 w-9 h-9 p-3 border-0">
          <span className="sr-only">Suche zurücksetzen</span>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      )}
      <label htmlFor={name} className="sr-only">Suchen</label>
    </div>
  )
}