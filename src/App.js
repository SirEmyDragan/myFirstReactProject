import React, { Component } from 'react';
import './App.css';
// import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'p1', name: 'Emi',    age:  28 },
      { id: 'p2', name: 'Monica', age:  24 },
      { id: 'p3', name: 'kid1',   age:  -3 },
      { id: 'p4', name: 'kid2',   age:  -6 },
      { id: 'p5', name: 'kid3',   age:  -9 },
      { id: 'p6', name: 'kid4',   age: -12 },
      { id: 'p7', name: 'kid5',   age: -15 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   //don't do this: this.state.persons[0].name = 'Emy';
  //   this.setState({
  //     persons: [
  //       { name: newName,  age: 43 },
  //       { name: 'Moni', age: 39 },
  //       { name: 'kid1', age: 12 },
  //       { name: 'kid2', age:  9 },
  //       { name: 'kid3', age:  6 },
  //       { name: 'kid4', age:  3 },
  //       { name: 'kid5', age:  0 }
  //     ]
  //   })
  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons});

    // this.setState({
    //   persons: [
    //     { name: event.target.value,  age: 28 },
    //     { name: 'Moni', age: 24 },
    //     { name: 'kid1', age: -3 },
    //     { name: 'kid2', age: -6 },
    //     { name: 'kid3', age: -9 },
    //     { name: 'kid4', age:-12 },
    //     { name: 'kid5', age:-15 }
    //   ]
    // })
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      // ':hover': {
      //   backgroundColor: 'lightgreen',
      //   color: 'black'
      // }
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
          <div >
            { this.state.persons.map((person, index) => {
              return <Person 
                        click = { () => this.deletePersonHandler(index) }
                        name = { person.name } 
                        age  = { person.age }
                        key = { person.id } 
                        changed = { (event) => this.nameChangedHandler(event, person.id) } />
              })
            }
            {/* < Person 
                 name = {this.state.persons[0].name} 
                 age = {this.state.persons[0].age}
                //  click = {this.switchNameHandler.bind(this, 'Emy :D')}
                 changed = { this.nameChangedHandler }>
                 My Hobbies: Coding.
             </ Person>
             < Person 
                 name = {this.state.persons[1].name} 
                 age = {this.state.persons[1].age}>
                 My Hobbies: Medicine.
             </ Person>
             < Person 
                 name = {this.state.persons[2].name} 
                 age = {this.state.persons[2].age} />
             < Person 
                 name = {this.state.persons[3].name} 
                 age = {this.state.persons[3].age} />
             < Person 
                 name = {this.state.persons[4].name} 
                 age = {this.state.persons[4].age} />
             < Person 
                 name = {this.state.persons[5].name} 
                 age = {this.state.persons[5].age} />
             < Person 
                 name = {this.state.persons[6].name} 
                 age = {this.state.persons[6].age} />

            */}
          </div>
      );
      style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

    let classes = [];
    if (this.state.persons.length <= 2){
      classes.push('red');
    }
    if (this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      // <StyleRoot>
          <div className = "App">
            <h1>Hi, I'm a React App</h1>
            <p className = {classes.join(' ')}>This is really working!</p>
            <button 
              style = {style}
              // onClick = { () => this.switchNameHandler('Emi PD')}>
              onClick = {this.togglePersonsHandler}>
              Toggle Persons
            </button>
            {/* { () => this.switchNameHandler('Emi PD')} or {this.switchNameHandler.bind(this, 'Emy :D')} are the same, first one can be inefficient and the bind version is best! */}
            {/* {
              this.state.showPersons ? //works the same as: this.state.showPersons === true ? */}
            {persons}  
              {/*  : null  // render nothing if not true */}
            {/* }  */}
          </div>
      // </StyleRoot>
    );
    // return React.createElement('div', null, React.createElement('h1', null, 'Does this work now?'));
  }
}

// export default Radium(App); //higher order component Radium(App)
export default App;
