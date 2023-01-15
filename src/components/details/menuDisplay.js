import React, { Component } from 'react'
// import './details.css'

class menuDisplay extends Component {

    orders = []
    placeOrder = (id) => {
        // console.log(this.order);
        this.orders.push(id)
        this.props.finalOrder(this.orders)
    }

    removeOrder = (id) => {
        // console.log(this.order);
        if (this.orders.indexOf(id) > -1) {
            this.orders.splice(this.orders.indexOf(id), 1)
        }
        this.props.finalOrder(this.order)
    }

    renderMenu = ({ menuData }) => {
        // console.log(menuData)
        if (menuData) {
            return (
                menuData.map(item => {
                    return (
                        <div key={item.menu_id}>
                            <div className='row flex align-items-center'>
                                <div className="col-md-7" style={{ marginLeft: '2rem', marginTop: '1rem', marginBottom: '1rem' }}>
                                    <b>{item.menu_id}</b> &nbsp;
                                    <img src={item.menu_image} alt={item.menu_name} style={{ width: 80, height: 80 }} />
                                    &nbsp; {item.menu_name} - Rs.{item.menu_price}
                                </div>
                                <div className="col-md-4">
                                    <button className="btn btn-success">
                                        <span className="glyphicon glyphicon-plus"
                                            onClick={() => this.placeOrder(item.menu_id)}>+</span>
                                    </button> &nbsp;
                                    <button className="btn btn-danger">
                                        <span className="glyphicon glyphicon-minus"
                                            onClick={() => this.removeOrder(item.menu_id)}>-</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        }

    }

    renderCart = (orders) => {
        console.log(orders);
        if (orders) {
            return (
                orders.map((item, index) => {
                    return (
                        <span key={index}>{item}&nbsp;</span>
                    )
                })
            )
        }
    }
    render() {
        return (
            <div>
                <div className="col-md-12" style={{ backgroundColor: 'rgb(173, 215, 173)', padding: '1rem' }}>
                    <h2>Item Added</h2>
                    <h3>Item Number {this.renderCart(this.orders)} Added</h3>
                </div>
                <div className='col-md-12 bg-info'>
                    {this.renderMenu(this.props)}
                </div>
            </div>
        )
    }

}

export default menuDisplay
