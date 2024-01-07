import React, { Component } from 'react'

export default class easy extends Component {
    constructor(props) {
        super();
        this.state= { person: "Jaylin",
        number: "980-777-7777", 
        birthdate: "07/10/2004"
    };
    }

  render() {
    return (
      <div>
        <p>Hello my name is {this.state.person} my phone number is {this.state.number} and I was born on {this.state.birthdate}</p>
      </div>
    )
  }
}
