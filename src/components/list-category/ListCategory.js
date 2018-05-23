import React, { Component } from 'react';
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        categories: state.category.categories
    }
};

class ListCategory extends Component {
    render() {
        let categoryList = [];
        for (const key in this.props.categories) {
            const category = this.props.categories[key];
            categoryList.push(<a href={category} key={key}><li>{category}</li></a>);
        }
        return (
            <ul>
                {categoryList}
            </ul>
        )
    }
}


export default connect(mapStateToProps, {})(ListCategory);
