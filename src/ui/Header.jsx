import { Link } from "react-router-dom"
import SearchOrder from "../features/order/SearchOrder"

function Header() {
  return (
    <header className="flex rounded-sm items-center justify-between bg-emerald-400 px-4 py-3 border-b border-blue-200 sm:px-6">
      <Link to='/' className='tracking-wider text-neutral-700 font-medium text-l'>JuicyBites Shawarma 🌯💦</Link>
      <SearchOrder />
    </header>
  )
}

export default Header
