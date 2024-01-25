import { Link } from "react-router-dom"

function Button({ children, isDisabled, to, type, onClick }) {

  const base = 'inline-block text-sm tracking-wide bg-emerald-400 uppercase font-semibold text-stone-800 rounded-lg hover:bg-emerald-300 duration-300 transition-colors focus:outline-none focus:ring focus:ring-emerald-300 focus:bg-emerald-300 focus:ring-offset-2 disabled:cursor-not-allowed '

  const styles = {
    primary: base + 'py-3 px-4 md:px-6 md:py-4',
    small: base + 'py-2 px-4 md:px-5 md:py-2.5 text-xs',
    round: base + 'py-1 px-2.5 md:px-3.5 md:py-2 text-sm',
    secondary: 'inline-block text-sm tracking-wide border-2 border-stone-300 uppercase font-semibold text-stone-400 rounded-lg hover:bg-stone-300 hover:text-stone-800 duration-300 transition-colors focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:bg-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed py-2.5 px-4 md:px-6 md:py-3.5'
  }

  if (to) return <Link to={to} className={styles[type]}>{children}</Link>

  if (onClick) return (
    <button onClick={onClick} disabled={isDisabled} className={styles[type]}>
      {children}
    </button>
  )

  return (
    <button className={styles[type]}>
      {children}
    </button>
  )
}

export default Button
