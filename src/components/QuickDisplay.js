import React from 'react'
import { Link } from 'react-router-dom'
import Dinner from '../images/dinner.png'


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
            {listMeals(props.mealData)}
        </div >

    )
}

export default QuickDisplay
