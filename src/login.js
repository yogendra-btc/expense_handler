import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Button, FormGroup, ControlLabel, FormControl,Col,Form,InputGroup } from 'react-bootstrap';
import { AsyncStorage } from 'AsyncStorage';

export default class Demo extends React.Component {
    constructor(props)  {
        super(props),
        this.state = {
            data: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.signIn = this.signIn.bind(this);
    }
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    signIn(){
        axios.post('http://127.0.0.1:8000/login/',{username:this.state.username,
            email:this.state.email,password:this.state.password})
            .then((response) => {
                console.log(response);
                AsyncStorage.setItem('token', response.data.key)
              this.setState({token:response.data.key})
              })
    }
    
    render(){
        const form = <Form method="post">
            <FormGroup>
                <Col sm={4} >
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter Username"
                        onChange={this.handleChange}
                        name="username"
                    />
                </Col>
            </FormGroup><br/><br/>
            <FormGroup>
                <Col sm={4}>
                <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Enter Email"
                    onChange={this.handleChange}
                    name="email"
                />
                </Col>
            </FormGroup><br/>
            <FormGroup>
                <Col sm={4}>
                <FormControl
                    type="text"
                    value={this.state.value}
                    placeholder="Enter Password"
                    onChange={this.handleChange}
                    name="password"
                />
                </Col>
            </FormGroup><br/>
            <Button className="login" onClick={this.signIn}>Submit</Button>
    </Form>
    return (
    <div >
        {form}
    </div>
);
}
}