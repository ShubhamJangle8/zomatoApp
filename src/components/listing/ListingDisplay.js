import React from 'react'
import { Link } from 'react-router-dom'
import './listing.css'
import Loader from '../../images/loader.gif'

const ListingDisplay = (props) => {

    // console.log(props.restaurantData)

    const renderMealType = (data) => {
        if (data) {
            return data.map(mealType => {
                return <span className="btn btn-primary m-1" key={mealType.mealtype_id}>
                    {mealType.mealtype_name}
                </span>
            })
        }

    }
    const renderCuisineType = (data) => {
        if (data) {
            return data.map(cuisine => {
                return <span className="btn btn-danger m-1" key={cuisine.cuisine_id}>
                    {cuisine.cuisine_name}
                </span>
            })
        }

    }

    const renderRestaurantMealSpecificData = ({ restaurantData }) => {
        if (restaurantData) {
            if (restaurantData.length > 0) {
                return restaurantData.map((item) => {
                    return (
                        <div className="item" key={item.restaurant_id}>
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={item.restaurant_thumb}
                                        className="Image" alt={item.restaurant_name} />
                                </div>
                                <div className="col-md-7">
                                    <div className="hotel_name">
                                        <Link to={`/details?restId=${item.restaurant_id}`}>
                                            {item.restaurant_name}
                                        </Link>
                                    </div>
                                    <div className="city_name">{item.address}</div>
                                    <div className="city_name">{item.rating_text}</div>
                                    <div className="city_name">Rs. {item.cost}</div>
                                    <div className="labelDiv">
                                        {
                                            renderMealType(item.mealTypes)
                                        }

                                    </div>
                                    <div className="labelDiv">
                                        {
                                            renderCuisineType(item.cuisines)
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            else {
                <div><h2>No filter found for this meal</h2></div>
            }
        }
        else {
            return <div>
                <h1>Loading......</h1>
                <img src={`${Loader}`} alt="Loader" />
            </div>
        }
    }

    return (
        <div id='content'>
            {
                renderRestaurantMealSpecificData(props)
            }
        </div>
    )
}
export default ListingDisplay
