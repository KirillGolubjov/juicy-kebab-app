import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice"


// eslint-disable-next-line react/prop-types
function UpdateItemQuantity( { kebabId, currentQuantity } ) {
  const dispatch = useDispatch()
  return (
    <div className="flex gap-2 items-center md:gap-3">
      <Button type='round' onClick={()=> dispatch(decreaseItemQuantity(kebabId))}>-</Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type='round' onClick={()=> dispatch(increaseItemQuantity(kebabId))}>+</Button>
    </div>
  )
}

export default UpdateItemQuantity
