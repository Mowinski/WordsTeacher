import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        category: state.category
    }
};

class ListCategory extends Component {
    render() {
        return (
            <ul>
                {this.props.category.map((category) =>
                    <a href={category} key={category}><li>{category}</li></a>
                )}
            </ul>
        )
    }
}


export default connect(mapStateToProps, {})(ListCategory);
