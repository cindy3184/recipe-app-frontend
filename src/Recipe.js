import React from 'react';
import Card from 'react-bootstrap/Card'
import { Col, Row, Form, } from "react-bootstrap";

const Recipe = ({ title, calories, image, ingredients }) => {
    return (
        <div>
             <Card className="m-5 border-0 shadow">
            <Row>
            <Card.Title><h1>{title}</h1></Card.Title>
            <Card.Body>
            <ol>
                {ingredients.map(ingredient => (
                    <li>
                        {ingredient.text}
                    </li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt=''/>
            </Card.Body>
            </Row>
            </Card>
           
        </div>
    )
}

export default Recipe;