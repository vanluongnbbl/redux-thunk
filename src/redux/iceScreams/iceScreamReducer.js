import { BUY_ICESCREAM } from "./iceScreamTypes"

const initialState = {
    numberOfIceScreams: 20
}

const iceScreamReducer = (state = initialState, action) => {

    switch (action.type) {
        case BUY_ICESCREAM: return{
            ...state,
            numberOfIceScreams: state.numberOfIceScreams - 1
        }
        default: return state
    }
}

export default iceScreamReducer