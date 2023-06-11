import React, { Component } from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay';

const url = 'http://3.17.216.66:4000/quicksearch'

class QuickSearch extends Component {

    constructor() {
        super()
        this.state = {
            mealType: ''
        }
    }

    render() {
        return (
            <div id="quickSearch">
                <span id="quickHeading">Quick Search</span>
                <span id="quickSubHeading">Find Products</span>
                <QuickDisplay mealData={this.state.mealType}/>
            </div>
        )
    }

    componentDidMount = () => {
        fetch(url, { method: 'GET' })
            .then((response) => response.json())
            .then(data => this.setState({mealType: data}))
    }
}

export default QuickSearch