import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './Header/Header'
import { Body } from './Body/Body'
import { Footer } from './Footer/Footer'
import { dummyData } from './Data/DummyData'
// eslint-disable-next-line no-unused-vars
import main from './style/main.css'
const AppLayout = () => {
    let newDummyData = dummyData
    return (
        <div className="main-app">
            <Header />
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        newDummyData = dummyData.filter((el) => el.rating > 4)
                        console.log('--dummyData--', newDummyData)
                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                <Body mockData={newDummyData} />
            </div>
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)
