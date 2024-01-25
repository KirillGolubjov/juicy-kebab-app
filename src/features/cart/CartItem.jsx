import { useSelector } from "react-redux";
import { getCurrentQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity'

function CartItem({ item }) {
  const { kebabId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantity(kebabId))

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className='flex items-center justify-between sm:gap-6'>
        <p className='text-sm font-bold'>{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity kebabId={kebabId} currentQuantity={currentQuantity} />
        <DeleteItem kebabId={kebabId} />
      </div>
    </li>
  )
}

export default CartItem
