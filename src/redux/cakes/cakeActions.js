import {BUY_CAKE} from './cakeTypes'

export const buyCake = (payload) => {
    return {
        type: BUY_CAKE,
        payload
    }
}