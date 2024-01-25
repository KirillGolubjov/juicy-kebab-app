import { useDispatch } from "react-redux"
import { deleteItem } from "./cartSlice"
import Button from "../../ui/Button"

// eslint-disable-next-line react/prop-types
function DeleteItem({ kebabId }) {
  const dispatch = useDispatch()
  return (
    <div>
      <Button type='small' onClick={() => dispatch(deleteItem(kebabId))}>Delete</Button>
    </div>
  )
}

export default DeleteItem
