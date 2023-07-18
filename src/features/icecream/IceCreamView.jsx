import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ordered, restocked } from './iceCreamSlice';


const IceCreamView = () => {
  const numOfIcecreams = useSelector((state) => {
    return state.icecream.numOfIcecreams
  })
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Icecreams - {numOfIcecreams}</h2>
      <button onClick={() => {dispatch(ordered())}}>Order Icecreams</button>
      <button onClick={() => {dispatch(restocked(3))}}>Restock Icecreams</button>
    </div>
  )
}

export default IceCreamView