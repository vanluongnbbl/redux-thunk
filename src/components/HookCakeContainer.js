import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {buyCake} from '../redux/cakes/cakeActions'
function HookCakeContainer() {
    const [number, setNumber] = useState(1)
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes)
    const dispatch = useDispatch()

    const handleBuyCake = (e) => {
        if (numberOfCakes - number >= 0) {
            dispatch(buyCake(number))
            setNumber(1)
        } else {
            alert("Not enought Cakes")
        }
    }
  return (
    <div>
        <h1>Number of cakes - {numberOfCakes}</h1>
        <input value={number} onChange={(e) => setNumber(e.target.value)} />
        <button onClick={handleBuyCake}>Buy {number} Cake</button>
    </div> 
  )
}

export default HookCakeContainer