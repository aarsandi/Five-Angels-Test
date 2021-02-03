const initialState = {
    isLoading: false,
    isError: false,
    data: [],
    sortedData: []
}

function site(state = initialState, action) {
    if (action.type === 'SET_LOADING') {
        return { ...state, isLoading: true }
    }
    if (action.type === 'SET_ERROR') {
        return { ...state, isError: true }
    }
    if (action.type === 'SETDATA') {
        return { ...state, data: action.payload, isLoading: false, isError: false }
    }
    if (action.type === 'SETSORTEDDATA') {
        return { ...state, sortedData: action.payload, isLoading: false, isError: false }
    }
    return state
}

export default site