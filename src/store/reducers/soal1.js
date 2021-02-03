const initialState = {
    isLoading: false,
    isError: false,
    quote: {},
    favQuote: [],
    myQuote: []
}

function site(state = initialState, action) {
    if (action.type === 'SET_LOADING') {
        return { ...state, isLoading: true }
    }
    if (action.type === 'SET_ERROR') {
        return { ...state, isError: true }
    }
    if (action.type === 'SETQUOTE') {
        return { ...state, quote: action.payload, isLoading: false, isError: false }
    }
    if (action.type === 'ADDTOFAV') {
        return { ...state, favQuote: state.favQuote.concat(action.payload), isLoading: false, isError: false }
    }
    if (action.type === 'ADDOWNQUOTE') {
        return { ...state, myQuote: state.myQuote.concat(action.payload), isLoading: false, isError: false }
    }
    return state
}

export default site