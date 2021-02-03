import axios from 'axios'

export function setLoading() {
    return { type: 'SET_LOADING'}
}
export function setError(error) {
    return { type: 'SET_ERROR', payload: error }
}
export function setData(data) {
    return { type: 'SETDATA', payload: data }
}
export function setSortedData(data) {
    return { type: 'SETSORTEDDATA', payload: data }
}

export function fetchData() {
    return async function (dispatch) {
        try {
            dispatch(setLoading())
            const response = await axios({
                method: 'get',
                url: 'https://testfai.herokuapp.com/ticker'
            })
            const sorted = response.data.ticker.sort(function (a, b) {
                return a.timestamps - b.timestamps;
            });
            dispatch(setData(sorted))
        } catch (err) {
            dispatch(setError())
        }
    }
}

export function sortByFiveMinute(data) {
    let result = []
    let prices = []
    let date
    let tempDate
    for (let i = 0; i < data.length; i++) {
        if (i === 0) {
            date = new Date(data[i].timestamps)
            tempDate = new Date(data[i].timestamps)
            prices.push(data[i].price)
            tempDate.setMinutes(date.getMinutes() + 5)
        } else if (i === data.length - 1) {
            prices.push(data[i].price)
            const open = prices[0]
            const close = prices[prices.length - 1]
            const sortedPrices = prices.sort(function (a, b) {
                return a - b;
            })
            const high = sortedPrices[sortedPrices.length - 1]
            const low = sortedPrices[0]
            result.push({x: date.getTime(), y: [open, high, low, close]})
        } else {
            if (new Date(data[i].timestamps) >= tempDate) {
                const open = prices[0]
                const close = prices[prices.length - 1]
                const sortedPrices = prices.sort(function (a, b) {
                    return a - b;
                })
                const high = sortedPrices[sortedPrices.length - 1]
                const low = sortedPrices[0]
                result.push({x: date.getTime(), y: [open, high, low, close]})
                date = tempDate
                prices = []
                prices.push(data[i].price)
                tempDate.setMinutes(date.getMinutes() + 5)
            } else {
                prices.push(data[i].price)
            }
        }
    }
    return { type: 'SETSORTEDDATA', payload: [{
        data: result
    }] }
}

export function sortByFifteenMinute(data) {
    let result = []
    let prices = []
    let date
    let tempDate
    for (let i = 0; i < data.length; i++) {
        if (i === 0) {
            date = new Date(data[i].timestamps)
            tempDate = new Date(data[i].timestamps)
            prices.push(data[i].price)
            tempDate.setMinutes(date.getMinutes() + 15)
        } else if (i === data.length - 1) {
            prices.push(data[i].price)
            const open = prices[0]
            const close = prices[prices.length - 1]
            const sortedPrices = prices.sort(function (a, b) {
                return a - b;
            })
            const high = sortedPrices[sortedPrices.length - 1]
            const low = sortedPrices[0]
            result.push({x: date.getTime(), y: [open, high, low, close]})
        } else {
            if (new Date(data[i].timestamps) >= tempDate) {
                const open = prices[0]
                const close = prices[prices.length - 1]
                const sortedPrices = prices.sort(function (a, b) {
                    return a - b;
                })
                const high = sortedPrices[sortedPrices.length - 1]
                const low = sortedPrices[0]
                result.push({x: date.getTime(), y: [open, high, low, close]})
                date = tempDate
                prices = []
                prices.push(data[i].price)
                tempDate.setMinutes(date.getMinutes() + 15)
            } else {
                prices.push(data[i].price)
            }
        }
    }
    return { type: 'SETSORTEDDATA', payload: [{
        data: result
    }] }
}

export function sortByThirtyMinute(data) {
    let result = []
    let prices = []
    let date
    let tempDate
    for (let i = 0; i < data.length; i++) {
        if (i === 0) {
            date = new Date(data[i].timestamps)
            tempDate = new Date(data[i].timestamps)
            prices.push(data[i].price)
            tempDate.setMinutes(date.getMinutes() + 30)
        } else if (i === data.length - 1) {
            prices.push(data[i].price)
            const open = prices[0]
            const close = prices[prices.length - 1]
            const sortedPrices = prices.sort(function (a, b) {
                return a - b;
            })
            const high = sortedPrices[sortedPrices.length - 1]
            const low = sortedPrices[0]
            result.push({x: date.getTime(), y: [open, high, low, close]})
        } else {
            if (new Date(data[i].timestamps) >= tempDate) {
                const open = prices[0]
                const close = prices[prices.length - 1]
                const sortedPrices = prices.sort(function (a, b) {
                    return a - b;
                })
                const high = sortedPrices[sortedPrices.length - 1]
                const low = sortedPrices[0]
                result.push({x: date.getTime(), y: [open, high, low, close]})
                date = tempDate
                prices = []
                prices.push(data[i].price)
                tempDate.setMinutes(date.getMinutes() + 30)
            } else {
                prices.push(data[i].price)
            }
        }
    }
    return { type: 'SETSORTEDDATA', payload: [{
        data: result
    }] }
}

export function sortByOneHours(data) {
    let result = []
    let prices = []
    let date
    let tempDate
    for (let i = 0; i < data.length; i++) {
        if (i === 0) {
            date = new Date(data[i].timestamps)
            tempDate = new Date(data[i].timestamps)
            prices.push(data[i].price)
            tempDate.setHours(date.getHours() + 1)
        } else if (i === data.length - 1) {
            prices.push(data[i].price)
            const open = prices[0]
            const close = prices[prices.length - 1]
            const sortedPrices = prices.sort(function (a, b) {
                return a - b;
            })
            const high = sortedPrices[sortedPrices.length - 1]
            const low = sortedPrices[0]
            result.push({x: date.getTime(), y: [open, high, low, close]})
        } else {
            if (new Date(data[i].timestamps) >= tempDate) {
                const open = prices[0]
                const close = prices[prices.length - 1]
                const sortedPrices = prices.sort(function (a, b) {
                    return a - b;
                })
                const high = sortedPrices[sortedPrices.length - 1]
                const low = sortedPrices[0]
                result.push({x: date.getTime(), y: [open, high, low, close]})
                date = tempDate
                prices = []
                prices.push(data[i].price)
                tempDate.setHours(tempDate.getHours() + 1)
            } else {
                prices.push(data[i].price)
            }
        }
    }
    return { type: 'SETSORTEDDATA', payload: [{
        data: result
    }] }
}

export function sortByThreeHours(data) {
    let result = []
    let prices = []
    let date
    let tempDate
    for (let i = 0; i < data.length; i++) {
        if (i === 0) {
            date = new Date(data[i].timestamps)
            tempDate = new Date(data[i].timestamps)
            prices.push(data[i].price)
            tempDate.setHours(date.getHours() + 3)
        } else if (i === data.length - 1) {
            prices.push(data[i].price)
            const open = prices[0]
            const close = prices[prices.length - 1]
            const sortedPrices = prices.sort(function (a, b) {
                return a - b;
            })
            const high = sortedPrices[sortedPrices.length - 1]
            const low = sortedPrices[0]
            result.push({x: date.getTime(), y: [open, high, low, close]})
        } else {
            if (new Date(data[i].timestamps) >= tempDate) {
                const open = prices[0]
                const close = prices[prices.length - 1]
                const sortedPrices = prices.sort(function (a, b) {
                    return a - b;
                })
                const high = sortedPrices[sortedPrices.length - 1]
                const low = sortedPrices[0]
                result.push({x: date.getTime(), y: [open, high, low, close]})
                date = tempDate
                prices = []
                prices.push(data[i].price)
                tempDate.setHours(tempDate.getHours() + 3)
            } else {
                prices.push(data[i].price)
            }
        }
    }
    return { type: 'SETSORTEDDATA', payload: [{
        data: result
    }] }
}

export function sortBySevenHours(data) {
    let result = []
    let prices = []
    let date
    let tempDate
    for (let i = 0; i < data.length; i++) {
        if (i === 0) {
            date = new Date(data[i].timestamps)
            tempDate = new Date(data[i].timestamps)
            prices.push(data[i].price)
            tempDate.setHours(date.getHours() + 7)
        } else if (i === data.length - 1) {
            prices.push(data[i].price)
            const open = prices[0]
            const close = prices[prices.length - 1]
            const sortedPrices = prices.sort(function (a, b) {
                return a - b;
            })
            const high = sortedPrices[sortedPrices.length - 1]
            const low = sortedPrices[0]
            result.push({x: date.getTime(), y: [open, high, low, close]})
        } else {
            if (new Date(data[i].timestamps) >= tempDate) {
                const open = prices[0]
                const close = prices[prices.length - 1]
                const sortedPrices = prices.sort(function (a, b) {
                    return a - b;
                })
                const high = sortedPrices[sortedPrices.length - 1]
                const low = sortedPrices[0]
                result.push({x: date.getTime(), y: [open, high, low, close]})
                date = tempDate
                prices = []
                prices.push(data[i].price)
                tempDate.setHours(tempDate.getHours() + 7)
            } else {
                prices.push(data[i].price)
            }
        }
    }
    return { type: 'SETSORTEDDATA', payload: [{
        data: result
    }] }
}

export function sortByOneDay(data) {
    let result = []
    let prices = []
    let date
    let tempDate
    for (let i = 0; i < data.length; i++) {
        if (i === 0) {
            date = new Date(data[i].timestamps)
            tempDate = new Date(data[i].timestamps)
            prices.push(data[i].price)
            tempDate.setDate(date.getDate() + 1)
        } else if (i === data.length - 1) {
            prices.push(data[i].price)
            const open = prices[0]
            const close = prices[prices.length - 1]
            const sortedPrices = prices.sort(function (a, b) {
                return a - b;
            })
            const high = sortedPrices[sortedPrices.length - 1]
            const low = sortedPrices[0]
            result.push({x: date.getTime(), y: [open, high, low, close]})
        } else {
            if (new Date(data[i].timestamps) >= tempDate) {
                const open = prices[0]
                const close = prices[prices.length - 1]
                const sortedPrices = prices.sort(function (a, b) {
                    return a - b;
                })
                const high = sortedPrices[sortedPrices.length - 1]
                const low = sortedPrices[0]
                result.push({x: date.getTime(), y: [open, high, low, close]})
                date = tempDate
                prices = []
                prices.push(data[i].price)
                tempDate.setDate(tempDate.getDate() + 1)
            } else {
                prices.push(data[i].price)
            }
        }
    }
    return { type: 'SETSORTEDDATA', payload: [{
        data: result
    }] }
}

export function sortByOneWeek(data) {
    let result = []
    let prices = []
    let date
    let tempDate
    for (let i = 0; i < data.length; i++) {
        if (i === 0) {
            date = new Date(data[i].timestamps)
            tempDate = new Date(data[i].timestamps)
            prices.push(data[i].price)
            tempDate.setDate(date.getDate() + 7)
        } else if (i === data.length - 1) {
            prices.push(data[i].price)
            const open = prices[0]
            const close = prices[prices.length - 1]
            const sortedPrices = prices.sort(function (a, b) {
                return a - b;
            })
            const high = sortedPrices[sortedPrices.length - 1]
            const low = sortedPrices[0]
            result.push({x: date.getTime(), y: [open, high, low, close]})
        } else {
            if (new Date(data[i].timestamps) >= tempDate) {
                const open = prices[0]
                const close = prices[prices.length - 1]
                const sortedPrices = prices.sort(function (a, b) {
                    return a - b;
                })
                const high = sortedPrices[sortedPrices.length - 1]
                const low = sortedPrices[0]
                result.push({x: date.getTime(), y: [open, high, low, close]})
                date = tempDate
                prices = []
                prices.push(data[i].price)
                tempDate.setDate(tempDate.getDate() + 7)
            } else {
                prices.push(data[i].price)
            }
        }
    }
    return { type: 'SETSORTEDDATA', payload: [{
        data: result
    }] }
}

export function sortByOneMonth(data) {
    let result = []
    let prices = []
    let date
    let tempDate
    for (let i = 0; i < data.length; i++) {
        if (i === 0) {
            date = new Date(data[i].timestamps)
            tempDate = new Date(data[i].timestamps)
            prices.push(data[i].price)
            tempDate.setMonth(date.getMonth() + 1)
        } else if (i === data.length - 1) {
            prices.push(data[i].price)
            const open = prices[0]
            const close = prices[prices.length - 1]
            const sortedPrices = prices.sort(function (a, b) {
                return a - b;
            })
            const high = sortedPrices[sortedPrices.length - 1]
            const low = sortedPrices[0]
            result.push({x: date.getTime(), y: [open, high, low, close]})
        } else {
            if (new Date(data[i].timestamps) >= tempDate) {
                const open = prices[0]
                const close = prices[prices.length - 1]
                const sortedPrices = prices.sort(function (a, b) {
                    return a - b;
                })
                const high = sortedPrices[sortedPrices.length - 1]
                const low = sortedPrices[0]
                result.push({x: date.getTime(), y: [open, high, low, close]})
                date = tempDate
                prices = []
                prices.push(data[i].price)
                tempDate.setMonth(tempDate.getMonth() + 1)
            } else {
                prices.push(data[i].price)
            }
        }
    }
    return { type: 'SETSORTEDDATA', payload: [{
        data: result
    }] }
}
