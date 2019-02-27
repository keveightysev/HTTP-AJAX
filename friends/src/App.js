import React from 'react';
import axios from 'axios';

import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      error: '',
      name: '',
      email: '',
      age: '',
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({ friends: res.data });
      })
      .catch(err => {
        this.setState({ error: err });
      });
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Friend List</h1>
        <FriendForm {...this.state} handleChange={this.handleChange} />
        <FriendList {...this.state} />
      </div>
    );
  }
}

export default App;
