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

  async componentDidMount() {
    try {
      const res = await axios.get('http://localhost:5000/friends')
      this.setState({ friends: res.data })
    } catch (err) {
      console.log(err.message)
    }
  }

  handleChange = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === "age") {
      value = Number(value);
    }

    this.setState({
      [e.target.name]: value,
    })
  }

  handleSubmit = async e => {
    e.preventDefault();
    const newFriend = {
      name: this.state.name,
      email: this.state.email,
      age: this.state.age,
    }

    const res = await axios.post('http://localhost:5000/friends', newFriend);
    this.setState({ friends: res.data });
  }

  handleDelete = async (e, id) => {
    e.preventDefault();
    const res = await axios.delete(`http://localhost:5000/friends/${id}`)
    this.setState({ friends: res.data });
  }

  handleUpdate = async (e, friend) => {
    e.preventDefault();
    const updateFriend ={
      name: friend.name,
      email: friend.email,
      age: friend.age,
      id: friend.id,
    }
    console.log(updateFriend);
    const res = await axios.put(`http://localhost:5000/friends/${updateFriend.id}`, updateFriend)
    this.setState({ friends: res.data });
  }

  render() {
    return (
      <div className="App">
        <h1>Friend List</h1>
        <FriendForm {...this.state} 
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}
        />
        <FriendList {...this.state} 
          handleDelete={this.handleDelete}
          handleUpdate={this.handleUpdate} 
        />
      </div>
    );
  }
}

export default App;
