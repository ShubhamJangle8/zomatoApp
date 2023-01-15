import axios from 'axios'
import React, { Component } from 'react'
import './details.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom'
import MenuDisplay from './menuDisplay';

const url = 'http://3.17.216.66:4000/details/'
const menuUrl = 'http://3.17.216.66:4000/menu/'

class Details extends Component {

    constructor() {
        super()
        this.state = {
            details: '',
            menu: '',
            userMenu: '',
            mealId: sessionStorage.getItem('mealId'),
        }
    }

    addToCart = (order) => {
        this.setState({ userMenu: order })
        console.log(this.state.userMenu);
    }
    render() {
        let { details } = this.state
        return (
            <div>
                <div className="main row" style={{ height: '80vh' }}>
                    <div className="col-md-12" style={{ height: 'inherit'}}>
                        <div className="tileImage">
                            <div className="imageClass">
                                <img src={details.restaurant_thumb} alt='details' />
                            </div>
                        </div>
                        <div className="tileContent">
                            <div className="content">
                                <h1>{details.restaurant_name}</h1>
                                <span id="cfeedback">231 Customers Rating Average</span>
                                <h3>Old Price <del>Rs. 450</del></h3>
                                <h3>Offer Price Rs. {details.cost}</h3>
                                <h3>Best Taste of Fresh Chai with Samosa At your Door or DineIn</h3>
                                <div>
                                    <div className="icons">
                                        <img src="https://i.ibb.co/wJvrhYg/veg.png" alt='veg' />
                                    </div>
                                    <div className="icons">
                                        <img src="https://i.ibb.co/mD3jpgc/sentizied.png" alt='sentizied' />
                                    </div>
                                </div>
                                <Tabs>
                                    <TabList>
                                        <Tab>About</Tab>
                                        <Tab>Contact</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <h2>{details.restaurant_name}</h2>
                                        <p>
                                            {details.restaurant_name} is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                                        </p>
                                    </TabPanel>
                                    <TabPanel>
                                        <h2>{details.address}</h2>
                                        <h3>Phone: {details.contact_number ? details.contact_number : '123456789'}</h3>
                                    </TabPanel>
                                </Tabs>
                                <Link to={`/listing/${this.state.mealId}`} className='btn btn-danger'>Back</Link>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="col-md-12">
                        <center><h2>Menu</h2></center>
                        <MenuDisplay menuData={this.state.menu} finalOrder={(data) => this.addToCart(data)} />
                    </div>
                </div>

            </div>
        )
    }

    componentDidMount = async () => {
        // let mealId = this.props.location.
        let restId = this.props.location.search.split("=")[1];
        // console.log(mealId);
        let response = await axios.get(`${url}${restId}`);
        let menuResponse = await axios.get(`${menuUrl}${restId}`);
        // console.log(menuResponse.data);
        this.setState({ details: response.data[0], menu: menuResponse.data });
    }
}

export default Details
