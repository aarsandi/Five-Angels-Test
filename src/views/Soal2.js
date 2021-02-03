import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData, sortByFiveMinute, sortByFifteenMinute, sortByThirtyMinute, sortByOneHours, sortByThreeHours, sortBySevenHours,
    sortByOneDay, sortByOneWeek, sortByOneMonth } from '../store/actions/soal2'
import Chart from "react-apexcharts";

export default function Soal2() {
    const dispatch = useDispatch()
    const history = useHistory();
    const data = useSelector((state) => state.soal2Reducer.data)
    const sortedData = useSelector((state) => state.soal2Reducer.sortedData)

    const options = {
        chart: {
          type: 'candlestick',
          height: 350
        },
        title: {
          text: 'CandleStick Chart',
          align: 'left'
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          tooltip: {
            enabled: true
          }
        }
    }

    useEffect(() => {
        dispatch(fetchData())
    },[dispatch])

    return (
            <div class="home_gallery_area p_120">
                <div className="container-fluid d-flex" style={{ justifyContent: 'space-between', color: '#838383' }}>
                    <div className="pointer">
                        <p onClick={(e) => {
                            e.preventDefault()
                            history.push("/")
                        }} style={{ fontWeight: 'normal', paddingTop: '10px', fontSize: '30px' }}><span className="fa fa-arrow-left mx-2"></span>Home</p>
                    </div>
                </div>
                <div class="container">
                    <div class="main_title">
                        <h2>Candle Price Chart</h2>
                    </div>
                    <div class="sort_button">
                        <ul class="button_list">
                            <li><p onClick={(e) => {
                                e.preventDefault()
                                dispatch(sortByFiveMinute(data))
                            }}>5 minute</p></li>
                            <li><p onClick={(e) => {
                                e.preventDefault()
                                dispatch(sortByFifteenMinute(data))
                            }}>15 minute</p></li>
                            <li><p onClick={(e) => {
                                e.preventDefault()
                                dispatch(sortByThirtyMinute(data))
                            }}>30 minute</p></li>
                            <li><p onClick={(e) => {
                                e.preventDefault()
                                dispatch(sortByOneHours(data))
                            }}>1 hours</p></li>
                            <li><p onClick={(e) => {
                                e.preventDefault()
                                dispatch(sortByThreeHours(data))
                            }}>3 hours</p></li>
                            <li><p onClick={(e) => {
                                e.preventDefault()
                                dispatch(sortBySevenHours(data))
                            }}>7 hours</p></li>
                            <li><p onClick={(e) => {
                                e.preventDefault()
                                dispatch(sortByOneDay(data))
                            }}>1 days</p></li>
                            <li><p onClick={(e) => {
                                e.preventDefault()
                                dispatch(sortByOneWeek(data))
                            }}>1 week</p></li>
                            <li><p onClick={(e) => {
                                e.preventDefault()
                                dispatch(sortByOneMonth(data))
                            }}>1 month</p></li>
                        </ul>
                    </div>
                </div>
                <div class="container">               
                {
                    sortedData &&
                    <Chart
                        options={options} series={sortedData} type="candlestick" height={350}
                    />
                }
                </div>
            </div>
    )
}
