
import { useFetcher, useLoaderData } from 'react-router-dom';
import { getOrderById } from "../../services/apiCafe";
import { calcMinutesLeft, formatCurrency, formatDate } from "../../utils/helpers";
import OrderItem from './OrderItem';
import { useEffect } from 'react';

function Order() {
  const order = useLoaderData()
  const fetcher = useFetcher()

  useEffect(function () {
    if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu')
  }, [fetcher])

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;

  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  console.log(order)
  return (
    <div className='px-4 py-6 space-y-8'>
      <div className='flex items-center justify-between flex-wrap gap-2'>
        <h2 className='text-xl font-semibold'>Order #{id} status</h2>

        <div className='space-x-2'>
          {priority && <span className='bg-red-500 rounded-full py-1 px-3 text-sm uppercase font-semibold text-red-50 tracking-wide'>Priority</span>}
          <span className='bg-green-500 rounded-full py-1 px-3 text-sm uppercase font-semibold text-green-50 tracking-wide'>{status} order</span>
        </div>
      </div>

      <div className='flex items-center tracking-wider justify-between flex-wrap gap-2 bg-stone-200 py-5 px-6'>
        <p className='font-medium '>
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left ⌚`
            : 'Order should have arrived'}
        </p>
        <p className='text-xs text-stone-500'>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul className='mx-4 divide-y dive-stone-200 border-b border-t'>
        {cart.map(item =>
          <OrderItem
            item={item}
            key={item.kebabId}
            isLoadingIngredients={fetcher.state === 'loading'}
            ingredients={fetcher.data?.find(el => el.id === item.kebabId)?.ingredients ?? []}
          />)}
      </ul>

      <div className='space-y-2 bg-stone-200 py-5 px-6'>
        <p className='text-sm font-medium text-stone-600'>Price kebab: {formatCurrency(orderPrice)}</p>
        {priority && <p className='text-sm font-medium text-stone-600'>Price priority: {formatCurrency(priorityPrice)}</p>}
        <p className='font-bold'>To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}</p>
      </div>


    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ params }) {
  const order = getOrderById(params.orderId);
  return order
}

export default Order
