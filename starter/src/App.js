import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Modal from './components/Modal'
import Navbar from './components/Navbar'
import CartContainer from './components/CartContainer'
import { calculateTotals, getCartItems } from './features/cart/cartSlice'

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart)
  const { isOpen } = useSelector((store) => store.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
    // eslint-disable-next-line
  }, [cartItems])

  useEffect(() => {
    dispatch(getCartItems('random'))
    // eslint-disable-next-line
  }, [])

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>loading...</h1>
      </div>
    )
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App
