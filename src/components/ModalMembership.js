import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import FormMembership from "./FormMembership";

function ModalMembership(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button variant='primary' onClick={handleShow}>
                Редагувати
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {<FormMembership id={props.id} name={props.name} phone={props.phone}
                                     options={props.options}
                                     library={props.library}
                                     libraryId={props.libraryId}
                                     dateOfRegistration={props.dateOfRegistration}
                                     isValidUntil={props.isValidUntil}
                    libs={props.libs}/>}
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalMembership