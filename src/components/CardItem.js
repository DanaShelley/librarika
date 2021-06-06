import React from 'react'
import {Button, Card, ListGroup} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const CardItem = (props) => (
    <>
        <Card style={{width: '300px'}} className={'flex-shrink-1 mr-5 mb-5'}>
            <Card.Header as="h5">{props.libraryId}</Card.Header>
            <Card.Body className={'d-flex flex-column'}>
                <Card.Title  className={'mb-auto'}>{props.title}</Card.Title>
                <ListGroup  className={'mt-3'} variant="bottom">
                    <ListGroup.Item><span>Адреса:</span>  {props.address}</ListGroup.Item>
                    <ListGroup.Item><span>Кількість книг:</span> {props.books}</ListGroup.Item>
                    <ListGroup.Item><span>Кількість користувачів:</span> {props.memberships}</ListGroup.Item>
                </ListGroup>
                <Button className={'mt-3'} variant='primary'>Перейти</Button>
            </Card.Body>
        </Card>
    </>


)
