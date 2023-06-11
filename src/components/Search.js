import React, { Component } from 'react';
import './Search.css';

const lurl = 'http://3.17.216.66:4000/location'
const rurl = 'http://3.17.216.66:4000/restaurant?stateId='

class Search extends Component {

    constructor() {
        super()
        this.state = {
            location: '',
            restaurants: '',
            id: ''
        }
    }

    renderCity = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option value={item.state_id} key={item._id}>{item.state}</option>
                )
            })
        }
    }

    handleCity = (event) => {
        fetch(`${rurl}${event.target.value}`, { method: 'GET' })
            .then(res => res.json())
            .then(data => this.setState({ restaurants: data }))
            .catch(err => console.log(err))
    }

    renderRestaurants = () => {
        // console.log();
        // if (restaurants) {
        //     return restaurants.map(restaurant => 
        //         <option key={restaurant._id} value={restaurant.state_id}>{restaurant.restaurant_name}</option>
        //     )
        // }
        if(this.state.restaurants){
            return this.state.restaurants.map(restaurant => <option key={restaurant._id} value={restaurant.state_id}>{restaurant.restaurant_name}</option>)
        }
    }

    render() {
        return (
            <div id="search">
                <div id="logo">
                    <span>E!</span>
                </div>
                <div id="heading">
                    Find Best Place Near You
                </div>
                <div className="dropdown">
                    <select onChange={this.handleCity}>
                        <option>----SELECT YOUR CITY----</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select id="restDrop">
                        <option>----SELECT YOUR RESTAURANTS----</option>
                        {/* {this.renderRestaurants(this.state.restaurants)} */}
                        {this.renderRestaurants()}
                    </select>
                </div>
            </div>
        )
    }


    componentDidMount = () => {
        fetch(lurl, { method: 'GET' })
            .then((response) => response.json())
            .then((data) =>
                this.setState({ location: data }
                ))
            .catch((err) => console.error(err))
    }
}

export default Search