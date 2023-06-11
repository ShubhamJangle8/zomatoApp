import React from 'react'
import { Link } from 'react-router-dom'
import Dinner from '../images/dinner.png'
import Product1 from '../images/p1.jpeg'
import Product2 from '../images/p2.jpeg'
import Product3 from '../images/p3.jpeg'
import Product4 from '../images/p4.jpeg'
import Desc1 from '../images/d1.jpeg'


const QuickDisplay = (props) => {
    const listMeals = (mealData) => {

        if (mealData) {
            return mealData.map(meal => (
                <Link to={`./listing/${meal.mealtype_id}`} key={meal.mealtype_id}>
                    <div className="tileContainer" >
                        <div className="tileComponent1">
                            <img src={Dinner} alt={meal.mealtype} />
                        </div>
                        <div className="tileComponent2">
                            <div className="componentHeading">
                                {meal.mealtype}
                            </div>
                            <div className="componentSubHeading">
                                {meal.content}
                            </div>
                        </div>
                    </div>
                </Link>
            )
            )
        }
        // console.log(mealData);
    }

    return (
        <div className="cardMain">
            {/* {listMeals(props.mealData)} */}
            <div className="tileContainer" >
                <div className="tileComponent1"> 
                    <img src={Product1} alt='p1' />
                </div>
                <div className="tileComponent2">
                    <div className="componentHeading">
                        'Product1'
                    </div>
                </div>
            </div>
            <div className="tileContainer" >
                <div className="tileComponent1">
                    <img src={Product2} alt='p1'/>
                </div>
                <div className="tileComponent2">
                    <div className="componentHeading">
                        'Product2'
                    </div>
                </div>
            </div>
            <div className="tileContainer" >
                <div className="tileComponent1">
                    <img src={Product3} alt='p1'/>
                </div>
                <div className="tileComponent2">
                    <div className="componentHeading">
                        'Product3'
                    </div>
                </div>
            </div>
            <div className="tileContainer" >
                <div className="tileComponent1">
                    <img src={Product4} alt='p1'/>
                </div>
                <div className="tileComponent2">
                    <div className="componentHeading">
                        'Product4'
                    </div>
                </div>
            </div>
        </div >

    )
}

export default QuickDisplay
