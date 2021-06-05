import React from 'react'
import API from "../utils/API";
import {CardItem} from "../components/CardItem";
import {Row} from "react-bootstrap";


class Libraries extends React.Component {

    state = {
        arr: [{id: '', name: '' , address: '', numberOfBooks: 0, numberOfMembership: 0}]
    };

    render() {

        return (
            <Row>
                {
                    <Row>
                        {this.state.arr.map(item => (
                            <CardItem key={item.id} title={item.name} address={item.address}/>
                        ))}
                    </Row>
                }
            </Row>
        )
    }
    async componentDidMount() {
        let libsData = await API.get("libraries/get/all");
        libsData = libsData.data;
        this.setState({arr: libsData})
    }
}



export default Libraries