import React, { Component } from 'react';
import { connect } from "react-redux";
import { login } from 'actions/user';

const mapDispatchToProps = { login };
const mapStateToProps = (state) => {
    return { }
};

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogged: false,
            login: "",
            password: "",
        };

        this.updateLogin = this.updateLogin.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.login = this.login.bind(this);
    }

    updateLogin(e) {
        this.setState({login: e.target.value});
    }

    updatePassword(e) {
        this.setState({password: e.target.value});
    }

    login(e) {
        this.props.login(this.state.login, this.state.password);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                <input type="text" placeholder="E-Mail" onChange={this.updateLogin} disabled={this.state.isLogged}/>
                <input type="password" placeholder="Password" onChange={this.updatePassword} disabled={this.state.isLogged}/>
                <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
