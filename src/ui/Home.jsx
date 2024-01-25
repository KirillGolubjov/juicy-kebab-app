import { useSelector } from 'react-redux';
import Button from './Button';
import { getCart } from '../features/cart/cartSlice';

function Home() {

  const cart = useSelector(getCart)

  return (
    <div className='my-10 px-4 text-center sm:my-16' >
      <h1 className='text-xl text-neutral-900 font-semibold mb-8 md:text-3xl main-text drop-shadow-2xl'>
        Discover a world of flavor with our
        <br />
        <span className="text-neutral-900 stroke-white">juicy shawarma artistry!</span>
      </h1>
      {/* <CreateUser /> */}
      <div>
        
        <Button type='primary' to='/menu'>{cart.length > 0 ? "Continue ordering" : "Start ordering"}</Button>
      </div>
    </div>
  );
}

export default Home;