import React from 'react'
import API from "../utils/API";
import {CardItem} from "../components/CardItem";
import {Breadcrumb, Container, Row} from "react-bootstrap";


class Libraries extends React.Component {

    state = {
        arr: [{id: '', name: '', address: '', numberOfBooks: 0, numberOfMembership: 0}]
    };

    render() {

        return (
            <Container>
                <h1 className='title'>Бібліотеки</h1>
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Головна</Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        Бібліотеки
                    </Breadcrumb.Item>
                </Breadcrumb>
                {
                    <Row className={'d-flex no-gutters'}>
                        {this.state.arr.map(item => (
                            <CardItem key={item.id} libraryId={item.id} title={item.name} address={item.address}
                                      books={item.numberOfBooks} memberships={item.numberOfMembership}/>
                        ))}
                    </Row>
                }
            </Container>
        )
    }

    async componentDidMount() {
        let libsData = await API.get("libraries/get/all");
        libsData = libsData.data;
        this.setState({arr: libsData})
    }
}


export default Libraries