import React, { useEffect, useState } from "react";
import "./Home.css";
import Table from 'react-bootstrap/Table';
function Pre() {
    const [state, setState] = useState([])
    // useEffect(() => {
    //     userdata()
    // }, []); 
    // const userdata = () => {
    //     axios
    //         .get("https://jsonplaceholder.typicode.com/users")
    //         .then(function (res) {
    //             console.log(res.data)
    //             setState(res.data)

    //         })
    // }
    return (
        <div className="box">
            <h4 className="title">Project Management</h4>
            <div className="bgImage">
                <div className="borderLine">
                    <a href="http://localhost:3000/add">
                        <button type="button" class="btn btn-primary">Add</button>
                    </a>
                    <a href="http://localhost:3000/home">
                        <button type="button" class="btn btn-primary">Home</button>
                    </a>
                    <a href="http://localhost:3000/pro">
                        <button type="button" class="btn btn-primary">Pro</button>
                    </a>
                    <a href="http://localhost:3000/test">
                        <button type="button" class="btn btn-primary">Test</button>
                    </a>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th> id</th>
                                <th> Name</th>
                                <th>username</th>
                                <th>email</th>
                                <th>address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                state.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.username}</td>
                                            <td>{item.email}</td>
                                            <td>{item.address}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}


export default Pre;