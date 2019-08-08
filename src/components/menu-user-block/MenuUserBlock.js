import React, { Component } from 'react';
import { connect } from "react-redux";
import { Login, UserProfile } from 'components';

const mapDispatchToProps = { };
const mapStateToProps = (state) => {
    return {
        isLogged: state.user.isLogged,
    }
};

class MenuUserBlock extends Component {
    render() {
        let component = <UserProfile />;
        if (!this.props.isLogged) {
            component = <Login />
        }
        return (
            <div>
                {component}
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MenuUserBlock);
