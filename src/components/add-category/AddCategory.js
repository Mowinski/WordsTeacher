import React, { Component } from 'react';
import { connect } from "react-redux";
import { addCategory } from '../../actions';

const mapDispatchToProps = { addCategory };
const mapStateToProps = (state) => {
    return { isCreating: state.category.isCreating }
};

class AddCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newCategory: "",
        };

        this.addCategory = this.addCategory.bind(this);
        this.updateCategory = this.updateCategory.bind(this);
    }

    updateCategory(e) {
        this.setState({
            newCategory: e.target.value
        });
    }
    addCategory() {
        this.props.addCategory(this.state.newCategory);
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Category name" onChange={this.updateCategory} disabled={this.props.isCreating}/>
                <button onClick={this.addCategory} disabled={this.props.isCreating}>Add</button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);
