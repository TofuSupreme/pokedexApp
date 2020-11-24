import React from 'react'
import './App.css'

// import MorePractice from './morepractice'
// import ExtraPractice from './extrapractice'
// import Form from './ListFormEx/form-list-practice'
import Pokedex from './pokedex hw'

// function Button(props) {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log(props.name);
//   }

//   return <button onClick={handleClick}>{props.name}</button>;
// }

// class Test extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       username: '',
//       comment: 'My comment.',
//       showUsername: false,
//     };
//   }

//   componentDidMount() {
//     const newComment = this.state.username + ': ' + this.state.comment;
//     this.setState({
//       username: this.props.username,
//       comment: newComment,
//     });
//   }

//   renderUsername() {
//     if (this.state.showUsername) {
//       return this.state.username;
//     }
//   }

//   handleShowUsername = (e) => {
//     e.preventDefault();
//     this.setState({ showUsername: !this.state.showUsername });
//   };

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <button onClick={this.handleShowUsername}>Show Username</button>
//         <p> {this.renderUsername()} </p>

//         <Button name="Click Me" />
//         <Button name="Click Me v2" />
//         <Button name="Click Me v3" />
//       </div>
//     );
//   }
// }

// function DisplayTime(props) {
//   return <h2>It is {props.date.toLocaleTimeString()}</h2>;
// }

// class Clock extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       date: new Date(),
//     };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({
//       date: new Date(),
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>My Clock</h1>
//         <DisplayTime date={this.state.date} />
//       </div>
//     );
//   }
// }

function App() {
  // function handleClick(e) {
  //   e.preventDefault();
  //   console.log('button was clicked');
  // }

  return (
    <div className="App">
      {/* This is working now. */}
      {/* <button onClick={handleClick}>Click Me</button> */}
      {/* <Test username="neoplatonist" />
      <Test username="vaelyon" /> */}
      {/* <Clock /> */}
      {/* <MorePractice />*/}
      {/* <ExtraPractice /> */}
      <Pokedex />
    </div>
  )
}

export default App
