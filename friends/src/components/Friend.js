import React from 'react';
import UpdateForm from './UpdateForm';

class Friend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friend: {
                name: this.props.name,
                age: this.props.age,
                email: this.props.email,
                id: this.props.id,
            },
            update: false,
        }
    }

    handleUpdateBtn = e => {
        e.preventDefault();
        this.setState({ update: !this.state.update });
    }

    handleChange = e => {
        e.persist();
        let value = e.target.value;
        if (e.target.name === 'age') {
            value = Number(value)
        }
        
        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [e.target.name]: value,
            }
        }))
    }

    render() {
        return(
            <>
            <h2>{this.props.name}</h2>
            <ul>
                <li>Age: {this.props.age}</li>
                <li>Email: {this.props.email}</li>
            </ul>
            <button onClick={e => {this.props.handleDelete(e, this.props.id)}}>Delete Friend</button>
            <button onClick={this.handleUpdateBtn}>Update Info</button>
            <UpdateForm 
                {...this.props}
                {...this.state}
                update={this.state.update} 
                handleChange={this.handleChange}
                handleUpdate={this.props.handleUpdate} 
                id={this.props.id}
            />
            </>
        );
    }
}

export default Friend;