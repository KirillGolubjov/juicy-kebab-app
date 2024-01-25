import { useState } from "react"
import { useNavigate } from "react-router";

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    if (!query) return;
    navigate(`/order/${query}`)
    setQuery('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder='Search order #' value={query} onChange={(e) => setQuery(e.target.value)} className='rounded-lg px-4 py-2 text-sm bg-emerald-100 placeholder:text-stone-600 w-28 transition-all duration-300 focus:outline-none focus:ring-opacity-50 focus:ring-emerald-500 sm:w-64 sm:focus:w-72' />
    </form>
  )
}

export default SearchOrder
