import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'react-bootstrap';
import axios from 'axios';


export default class Demo extends React.Component {
    constructor(props)  {
        super(props),
        this.state = {
            data: '',
        }
    }

    componentDidMount() {
        this.UserExpense();
      }

    UserExpense(){
          axios.get('http://127.0.0.1:8000'+window.location.pathname)
          .then((response) =>{
            this.setState({
                data: response.data,
            });
          }
        )
      }
    render(){
        const tableInstance = (
            <Table responsive>
                <thead>
                <tr className="title">
                    <th>ID</th>
                    <th>USERNAME</th>
                    <th>EMAIL</th>
                </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>{this.state.data.id}</td>
                            <td>{this.state.data.username}</td>
                            <td>{this.state.data.email}</td>
                        </tr>
                </tbody>
            </Table>
        );
    return (
    <div >
        {tableInstance}
    </div>
);
}
}