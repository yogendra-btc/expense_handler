import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { AsyncStorage } from 'AsyncStorage';

export default class Demo extends React.Component {
    constructor(props)  {
        super(props),
        this.signOut = this.signOut.bind(this);
    }
    componentDidMount() {
        this.signOut();
      }
    signOut(){
        AsyncStorage.getItem('token').then((keyValue) =>{
            axios.defaults.headers.common['token'] = keyValue;
        
            axios.get('http://127.0.0.1:8000/signout/')
            .then((response) => {
                console.log(response);
              })
            })
    }
    render(){
    return (
    <div >
    </div>
    );
}
}