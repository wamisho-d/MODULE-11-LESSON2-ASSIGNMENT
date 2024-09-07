// Question 1 Task1:Code Correction

import React, {Component} from 'react';
class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {name: 'Alex'};

        // Binding the changeName method to the component
        this.changeName = this.changeName.bind(this);
    }

    // Corrected function using setState
    changeName() {
        this.setState({name: 'Charlie'});

    }

    render() {
        return (
            <div>
                <h1>User Profile</h1>
                <p>Name: {this.state.name}</p>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        );
    }
}

export default UserProfile;
