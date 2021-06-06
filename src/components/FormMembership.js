import {Button, Form} from "react-bootstrap";
import React, {useState} from "react";
import Select from "react-select";
import API from "../utils/API";

function FormMembership(props) {

    function findLibIndex(options, id) {
        let i = 0
        options.forEach((item, index) => {
            if (item.value === id) {
                i = index
            }
        })
        return i
    }

    let k = findLibIndex(props.options, props.libraryId)

    const [data, setData] = useState({
            id: props.id,
            name: props.name,
            phone: props.phone,
            library: props.libs[k],
            dateOfRegistration: props.dateOfRegistration,
            isValidUntil: props.isValidUntil
        }
    )

    console.log(data)

    /*
        let k = findLibIndex()
        console.log(k)*/

    function handleInput(e) {
        const newData = {...data}
        console.log(1)
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    function handleSelect(e) {
        const newData = {...data}
        props.libs.forEach(item => {
            if (item.id === e.value) {
                newData["library"] = item
            }
        })
        setData(newData)
        console.log(newData)
    }


    function handleSubmit(e) {
        e.preventDefault()
        API.post('/memberships/update', data).then(r => console.log(r))
    }

    return (
        <Form onSubmit={(event => handleSubmit(event))}>
            <Form.Group className='mb-3'>
                <Form.Label>Id</Form.Label>
                <Form.Control onChange={(event => handleInput(event))} type='text' value={props.id} id={'name'}
                              name={'name'} readOnly/>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Ім'я</Form.Label>
                <Form.Control onChange={(event => handleInput(event))} type='text' placeholder='Буднарюк Марія'
                              id={'name'} name={'name'} defaultValue={props.name}/>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Номер телефону</Form.Label>
                <Form.Control onChange={(event => handleInput(event))} type='text' placeholder='+380966380974'
                              id={'phone'} name={'phone'} defaultValue={props.phone}/>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Бібліотека</Form.Label>
                <Select onChange={(event => handleSelect(event))}
                        defaultValue={props.options[k]}
                        options={props.options} name={'library'} id={'library'}/>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Дата реєстрації</Form.Label>
                <Form.Control onChange={(event => handleInput(event))} type='date' name={'dateOfRegistration'}
                              id={'dateOfRegistration'} defaultValue={props.dateOfRegistration}/>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Дата реєстрації</Form.Label>
                <Form.Control onChange={(event => handleInput(event))} type='date' name={'isValidUntil'}
                              id={'isValidUntil'} defaultValue={props.isValidUntil}/>
            </Form.Group>

            <Button variant='primary' type='submit'>
                Підтвердити
            </Button>
        </Form>
    )
}

export default FormMembership