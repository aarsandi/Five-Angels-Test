import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home() {
    const history = useHistory();
    return (
        <div className="home_area">
        	<div className="container">
        		<div className="main_title">
        			<h2>Five Angels Test Front End</h2>
        		</div>
        		<div className="home_inner row">
        			<div className="col-lg-6 col-md-6">
        				<div className="home_item" onClick={(e) => {
                            e.preventDefault()
                            history.push("/soal1")
                        }}>
        					<h4>Soal No 1. kanye West Quotes</h4>
        					<p>Fetch data dan menggunakan Redux untuk state management pada Quote, Favorite Quote dan My Own Quote</p>
        				</div>
        			</div>
        			<div className="col-lg-6 col-md-6">
        				<div className="home_item" onClick={(e) => {
                            e.preventDefault()
                            history.push("/soal2")
                        }}>
        					<h4>Soal No 2. Candle Stick Chart</h4>
        					<p>Fetch data kemudian disortir berdasarkan date time dan mensortir data pricenya menjadi (open, close, low, high)</p>
        				</div>
        			</div>
        		</div>
        	</div>
        </div>
    )
}
