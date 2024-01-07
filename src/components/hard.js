import React, { Component } from 'react'

export default class easy extends Component {
    constructor(props) {
        super(props);
        this.state= { person: props.name,
        number: props.number, 
        birthdate: props.birthdate
    };
    }

    people = [
        {
            name: 'Jaylin',
            number: "980-777-7777",
            birthdate: "07/10/2004"
        },
        {
            name: 'Joe',
            number: "920-444-4444",
            birthdate: "12/01/2001"
        },
        {
            name: 'Kanye West',
            number: "040-111-1111",
            birthdate: "06/08/1977"
        }
    ];

    PeopleList = this.people.map(person => 
    <p>
        Name: {person.name}, 
        Age: {person.number}, 
        Birthday: {person.birthdate}
    </p>
    );

  render() {
    return (
      <div>
        {this.PeopleList}
      </div>
    )
  }
}

