import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
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
          axios.get('http://127.0.0.1:8000/users/')
          .then((response) =>{
            this.setState({data:response.data});
            this.setState({num_of_pages:Math.ceil(response.data.length/4)});
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
                    {
                        Object.keys(this.state.data).map(function(key, index) {
                        return (
                        <tr key={key}><td>{this.state.data[key]['username']}</td>
                        <td>{this.state.data[key]['username']}</td>
                        <td>{this.state.data[key]['email']}</td>
                        </tr>
                        );
                        },this)
                    }
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