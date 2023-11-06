import React from 'react'
import ReactDOM from 'react-dom/client'
import { Header } from './Header/Header'
import { Body } from './Body/Body'
import { Footer } from './Footer/Footer'
import { dummyData } from './Data/DummyData'
import { useState } from 'react'
// import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import main from './style/main.css'
const AppLayout = () => {
    const [newDummyData, setNewDummyData] = useState(dummyData)
    // useEffect(() => {
    //     fetchData()
    // }, [])
    // async function fetchData() {
    //     const apiData = await axios.post('https://www.swiggy.com/dapi/restaurants/list/update', {
    //         lat: 25.4358011,
    //         lng: 81.846311,
    //         nextOffset: 'COVCELQ4KIDY44aygMT8WjCnEzgE',
    //         widgetOffset: {
    //             NewListingView_Topical_Fullbleed: '',
    //             NewListingView_Topical_Version2: '',
    //             NewListingView_category_bar_chicletranking_TwoRows: '',
    //             NewListingView_category_bar_chicletranking_TwoRows_Rendition: '',
    //             Restaurant_Group_WebView_SEO_PB_Theme: '',
    //             collectionV5RestaurantListWidget_SimRestoRelevance_food_seo: '10',
    //             inlineFacetFilter: '',
    //             restaurantCountWidget: '',
    //         },
    //         filters: {},
    //         seoParams: {
    //             seoUrl: 'https://www.swiggy.com/',
    //             pageType: 'FOOD_HOMEPAGE',
    //             apiName: 'FoodHomePage',
    //         },
    //         page_type: 'DESKTOP_WEB_LISTING',
    //         _csrf: 't09nCnVTr7gk-iQbW1WQu5ML9Nusl3DCbCe94C0Q',
    //     })
    //     console.log('--api--', apiData)
    // }
    const [searchVal, setSearchVal] = useState('')
    return (
        <div className="main-app">
            <Header />
            <div className="filter">
                <input
                    type="text"
                    name="searchText"
                    className="search"
                    value={searchVal}
                    onChange={(e) => {
                        setSearchVal(e.target.value)
                    }}
                />
                <button
                    className="searchBtn"
                    onClick={() => {
                        const filtedData = dummyData.filter((item) => {
                            console.log('- searchVale-', searchVal)
                            item.info.name.toLowerCase().includes(searchVal.toLowerCase())
                        })
                        console.log('--filtedData--', filtedData)
                        setNewDummyData(filtedData)
                    }}>
                    Search
                </button>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filterdData = newDummyData.filter((el) => el.rating > 4)
                        setNewDummyData(filterdData)
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
