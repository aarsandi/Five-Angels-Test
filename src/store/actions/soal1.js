import axios from 'axios'

export function setLoading() {
    return { type: 'SET_LOADING'}
}
export function setError(error) {
    return { type: 'SET_ERROR' }
}

export function setQuote(quote) {
    return { type: 'SETQUOTE', payload: quote }
}
export function addToFav(quote) {
    return { type: 'ADDTOFAV', payload: quote }
}
export function addOwnQuote(quote) {
    return { type: 'ADDOWNQUOTE', payload: quote }
}

export function fetchQuote() {
    return async function (dispatch) {
        try {
            dispatch(setLoading())
            const response = await axios({
                method: 'get',
                url: 'https://api.kanye.rest/'
            })
            dispatch(setQuote(response.data))
        } catch (err) {
            dispatch(setError())
        }
    }
}
