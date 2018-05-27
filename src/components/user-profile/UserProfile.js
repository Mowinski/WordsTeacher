import React, { Component } from 'react';
import { connect } from "react-redux";
import { logout } from 'actions/user';

const mapDispatchToProps = { logout };
const mapStateToProps = (state) => {
    return {
        email: state.user.currentUser.email,
    }
};

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.logout();
    }

    render() {
        return (
            <div>
                Zalogowałeś się jako {this.props.email}
                <button onClick={this.logout}>Wyloguj się</button>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
