import React, { Component } from 'react';
import { connect } from "react-redux";
import { deleteCategory } from 'actions/category';

const mapDispatchToProps = { deleteCategory };
const mapStateToProps = (state) => Object();

class DeleteCategory extends Component {
    constructor(props) {
        super(props);
        this.deleteCategory = this.deleteCategory.bind(this);
    }

    async deleteCategory() {
        await this.props.deleteCategory(this.props.categoryID);
        alert('Category removed');
    }

    render() {
        return (
            <button onClick={this.deleteCategory}>-</button>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteCategory);
