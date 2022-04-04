import { BUY_ICESCREAM } from "./iceScreamTypes"

export const buyIceScream = (payload) => {
    return {
        type: BUY_ICESCREAM,
        payload
    }
} 