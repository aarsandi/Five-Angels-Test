import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuote, addToFav, addOwnQuote } from '../store/actions/soal1'

export default function Soal1() {
    const dispatch = useDispatch()
    const history = useHistory();
    const [ inputQuote, setInputQuote ] = useState('')

    const quote = useSelector((state) => state.soal1Reducer.quote)
    const favQuote = useSelector((state) => state.soal1Reducer.favQuote)
    const myQuote = useSelector((state) => state.soal1Reducer.myQuote)
    const isLoading = useSelector((state) => state.soal1Reducer.isLoading)

    function fetch (event) {
        event.preventDefault()
        dispatch(fetchQuote())
    }

    function addFav (event) {
        event.preventDefault()
        let find = favQuote.find(temp => (
            temp.quote === quote.quote
        ))
        if (!find) {
            dispatch(addToFav(quote))
        }
    }

    function addOwn (event, data) {
        event.preventDefault()
        let find = myQuote.find(temp => (
            temp.quote === inputQuote
        ))
        if (!find) {
            dispatch(addOwnQuote({ quote: inputQuote }))
        }
        setInputQuote('')
    }

    useEffect(() => {
        dispatch(fetchQuote())
    },[dispatch])

    return (
        <div className="quotes_area">
            <div className="container-fluid d-flex" style={{ justifyContent: 'space-between', color: '#838383' }}>
                <div className="pointer">
                    <p onClick={(e) => {
                        e.preventDefault()
                        history.push("/")
                    }} style={{ fontWeight: 'normal', paddingTop: '10px', fontSize: '30px' }}><span className="fa fa-arrow-left mx-2"></span>Home</p>
                </div>
            </div>
            <div className="container">
                <div className="main_title">
                    <h2>Kanye West Quotes</h2>
                    {
                        quote &&
                        <p>{quote.quote}</p>
                    }
                    {
                        isLoading ? <button className="btn btn-primary mx-1" disabled>Loading ..</button> :
                        <button className="btn btn-primary mx-1" onClick={fetch}>Get Quote</button>
                    }
                    <button className="btn btn-primary mx-1" onClick={addFav}>Add Favorite</button>
                </div>
                <div className="quotes_inner row">
                    {
                        favQuote.map((temp) => (
                            <div className="col-lg-3 col-md-6">
                                <div className="quotes_item">
                                    <p>{temp.quote}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="main_title">
                    <h2>My Quotes</h2>
                    <form onSubmit={addOwn}>
                        <div className="form-group">
                            <label>add own quotes</label>
                            <input type="text" className="form-control" value={inputQuote} onChange={(e) => { setInputQuote(e.target.value) }}/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="quotes_inner row">
                    {
                        myQuote.map((temp) => (
                            <div className="col-lg-3 col-md-6">
                                <div className="quotes_item">
                                    <p>{temp.quote}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
