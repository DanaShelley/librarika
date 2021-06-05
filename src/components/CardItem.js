import React from 'react'
import {Button, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const CardItem = (props) => (
    <>
        <Card style={{width: '18rem'}}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.address}</Card.Text>
                <Button  variant='primary'>Go somewhere</Button>
            </Card.Body>
        </Card>
    </>


)
