
import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantity } from '../cart/cartSlice';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';
import DeleteItem from '../cart/DeleteItem';

// eslint-disable-next-line react/prop-types
function MenuItem({ kebab }) {
  const dispatch = useDispatch()
  // eslint-disable-next-line react/prop-types
  const { id, name, unitPrice, ingredients, image } = kebab;
  const currentQuantity = useSelector(getCurrentQuantity(id))
  const isInCart = currentQuantity > 0


  function handleAddToCart() {
    const newItem = {
      kebabId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    }
    dispatch(addItem(newItem))
  }
  return (
    <li className='flex gap-4 py-2'>
      <img src={image} alt={name} className="h-24 sm:h-[10rem]" />
      <div className='flex grow flex-col pt-0.5'>
        <p className='font-medium'>{name}</p>
        <p className='text-sm italic text-stone-500 capitalize'>
          {ingredients}
        </p>

        <div className='mt-auto flex items-center justify-between'>
          <p className='text-sm'>{formatCurrency(unitPrice)}</p>

          {isInCart && (
            <div className='flex items-center gap-3 sm:gap-8'>
              <UpdateItemQuantity kebabId={id} currentQuantity={currentQuantity} />
              <DeleteItem kebabId={id} />
            </div>
          )}
          
          {!isInCart && <Button onClick={handleAddToCart} type='small'>Add to cart</Button>}
        </div>
      </div>
    </li>
  )
}

export default MenuItem
