import React from 'react';
import axios from 'axios';

import FriendList from './components/FriendList';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      error: '',
    }
  }
  componentDidMount() {
    console.log("inside CDM");
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res.data);
        this.setState({ friends: res.data });
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Friend List</h1>
        <FriendList {...this.state} />
      </div>
    );
  }
}

export default App;
