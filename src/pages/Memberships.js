import React from 'react'
import API from "../utils/API";
import {Accordion, Breadcrumb, Col} from "react-bootstrap";
import MembershipItem from "../components/MembershipItem";


class Memberships extends React.Component {

    state = {
        arr: [{id: '', name: '', phone: '', library: '', dateOfRegistration: '2000-01-01', isValidUntil: '2010-01-01'}],
        options: [{value: '', label: ''}],
        libs: [{}]
    };

    formatDate(arr) {
        let arr2 = []
        arr2.push(...arr)
        if (arr2[1] < 10) {
            arr2[1] = `0${arr2[1]}`
        }

        if (arr2[2] < 10) {
            arr2[2] = `0${arr2[2]}`
        }

        return arr2.join("-")
    }

    async deleteMembership(id) {
        await API.delete('memberships/delete/' + id)
        this.componentDidMount()
    }

    render() {

        return (
            <>
                <h1 className='title'>Користувачі</h1>
                <Breadcrumb>
                    <Breadcrumb.Item href='/'>Головна</Breadcrumb.Item>
                    <Breadcrumb.Item active>
                        Користувачі
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Accordion defaultActiveKey='0'>
                    {
                        <Col xl={8}>
                            {this.state.arr.map(item => (
                                <MembershipItem key={item.id} id={item.id} name={item.name} phone={item.phone}
                                                library={item.library.name}
                                                libraryId={item.library.id}
                                                dateOfRegistration={this.formatDate(item.dateOfRegistration)}
                                                isValidUntil={this.formatDate(item.isValidUntil)}
                                                delete={this.deleteMembership.bind(this, item.id)}
                                                options={this.state.options}
                                libs={this.state.libs}/>
                            ))}
                        </Col>
                    }

                </Accordion>
            </>


        )
    }

    async componentDidMount() {
        let membershipsData = await API.get("memberships/get/all");
        membershipsData = membershipsData.data;
        this.setState({arr: membershipsData})
        let libs = await API.get('libraries/get/all')
        let arr = []
        libs = libs.data
        this.setState({libs: libs})
        libs.forEach(libs => {
            arr.push({value: libs.id, label: libs.name})
        })
        this.setState({options: arr})
    }
}


export default Memberships