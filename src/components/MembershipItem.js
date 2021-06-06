import React from 'react'
import {Accordion, Button, Card, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalMembership from "./ModalMembership";



class MembershipItem extends React.Component {
    handleChange = selectedOption => {
        this.setState({selectedOption});
        console.log(`Option selected:`, selectedOption);
    };

    state = {
        selectedOption: null,
        show: false
    };

    setShow(k) {
        this.setState({show: k})
    }

    render() {

        return (
            <>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={"div"} variant='link' eventKey={this.props.id} role='button'>
                            <div className={'d-flex justify-content-between'}>
                                <span>{this.props.id}</span>
                                <span>{this.props.name}</span>
                                <span>{this.props.phone}</span>

                            </div>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={this.props.id}>
                        <Card.Body>
                            <div className={'d-flex justify-content-between'}>
                                <Col lg={3}>Бібліотека</Col>
                                <Col>{this.props.library}</Col>
                            </div>
                            <div className={'d-flex justify-content-between'}>
                                <Col lg={3}>Дата реєстрації</Col>
                                <Col>{this.props.dateOfRegistration}</Col>
                            </div>
                            <div className={'d-flex justify-content-between'}>
                                <Col lg={3}>Дійсно до</Col>
                                <Col>{this.props.isValidUntil}</Col>
                            </div>
                            <div className={'mt-3'}>
                                <Button className={'mr-2'} onClick={this.props.delete}>Видалити</Button>


                                <ModalMembership options={this.props.options} id={this.props.id} name={this.props.name}
                                                 phone={this.props.phone}
                                                 libraryId={this.props.libraryId}
                                                 dateOfRegistration={this.props.dateOfRegistration}
                                                 isValidUntil={this.props.isValidUntil}
                                libs={this.props.libs}/>
                            </div>
                        </Card.Body>
                    </Accordion.Collapse>


                </Card>
            </>

        )
    }


}

export default MembershipItem