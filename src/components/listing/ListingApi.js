import React, { Component } from 'react'
import ListingDisplay from './ListingDisplay'
import axios from 'axios'
import './listing.css'

const url = 'http://3.17.216.66:4000/restaurant?mealtype_id='

class Listing extends Component {

  constructor(props) {
    super(props)
    this.state = {
      restaurants: ''
    }
    // console.log(this.props.match.params.mealId);
  }

  render() {
    return (
      <>
        <div className='row'>
          <div id="mainListing">
            <div id="filter">

            </div>
            <ListingDisplay restaurantData={this.state.restaurants} />
          </div>
        </div>
      </>
    )
  }

  componentDidMount = () => {
    let mealId = this.props.match.params.mealId;
    sessionStorage.setItem('mealId', mealId);
    axios.get(`${url}${mealId}`)
      .then(res => this.setState({
        restaurants: res.data
      }))
  }
}

export default Listing
