import {combineReducers} from 'redux'
import cakeReducer from './cakes/cakeReducer'
import iceScreamReducer from './iceScreams/iceScreamReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
    cake: cakeReducer, 
    iceScream: iceScreamReducer,
    user: userReducer
})

export default rootReducer