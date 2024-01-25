import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity)
  const totalCartPrice = useSelector(getTotalCartPrice)

  if (!totalCartQuantity) return null;

  return (
    <div className='flex rounded-sm items-center justify-between bg-stone-800 px-4 py-4 text-sm text-stone-200 uppercase sm:px-6 md:text-base'>
      <p className='space-x-4 text-stone-300 font-medium sm:space-x-6'>
        <span>{totalCartQuantity} {totalCartQuantity > 1 ? 'products' : 'product'}</span>
        <span>{totalCartPrice} $</span>
      </p>
      <Link to='/cart'>Open 🛒&rarr;</Link>
    </div>
  );
}

export default CartOverview
