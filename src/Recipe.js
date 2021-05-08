import React from 'react';
import Card from 'react-bootstrap/Card'
import { Row } from "react-bootstrap";

const Recipe = ({ title, calories, image, ingredients }) => {
    return (

        
        <div>
             <Card className="p-8 m-5 border-0 shadow">
            <Row>
            <Card.Body>
            <h1>{title}</h1>
                {ingredients.map(ingredient => (
                    <li>
                        {ingredient.text}
                    </li>
                ))}
            <p>Calories: {calories}</p>
            <img src={image} alt=''/>
            </Card.Body>
            </Row>
            </Card>
           
        </div>
        
        )
}

export default Recipe;