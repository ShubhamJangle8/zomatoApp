import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Listing from './listing/ListingApi'
import Details from './details/restDetails'


const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/listing/:mealId" component={Listing} />
            <Route path="/details" component={Details} />
            <Footer />
        </BrowserRouter>
    )
}

export default App
