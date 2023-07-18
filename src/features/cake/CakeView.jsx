import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './cakeSlice';

const CakeView = () => {
  const numOfCakes = useSelector((state) => {
    return state.cake.numOfCakes; //state refers to the redux state here store where cake is selected
  })

  const dispatch = useDispatch();
  const [value, setValue] = useState(1)
  const onValueChange = (e) => {
    setValue(parseInt(e.target.value))
  }

  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <h3>Restock: <input onChange={(e) => onValueChange(e)}></input></h3>
      <button onClick={() => { dispatch(ordered()) }}>Order Cakes</button>
      <button onClick={() => { dispatch(restocked(value)) }}>Restock Cakes</button>
    </div>
  )
}

export default CakeView