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
            this.setState({data:response.data});
          }
        )
      }
    render(){
        const tableInstance = (
            <Table responsive>
                <thead>
                <tr className="title">
                <th>ID</th>
                <th>USER_ID</th>
                <th>EXPENSE_COST</th>
                <th>EXPENSE_TYPE</th>
                <th>EXPENSE_DESCRIPTION</th>
                <th>EXPENSE_DATETIME</th>
            </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>{this.state.data.id}</td>
                            <td>{this.state.data.user_id}</td>
                            <td>{this.state.data.expense_cost}</td>
                            <td>{this.state.data.expense_type}</td>
                            <td>{this.state.data.expense_description}</td>
                            <td>{this.state.data.expense_datetime}</td>
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