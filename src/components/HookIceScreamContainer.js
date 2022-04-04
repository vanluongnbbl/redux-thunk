import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { buyIceScream } from '../redux/iceScreams/iceScreamAction'

function HookIceScreamContainer() {
    const numOfIceScreams = useSelector(state => state.iceScream.numberOfIceScreams)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Number Of IceScreams - {numOfIceScreams}</h2>
        <button onClick={() => dispatch(buyIceScream())}>Buy IceScream</button>
    </div>
  )
}

export default HookIceScreamContainer