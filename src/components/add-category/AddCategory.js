import React, { Component } from 'react';
import { connect } from "react-redux";
import { categoryAdded } from '../../actions';

const mapDispatchToProps = { categoryAdded };
const mapStateToProps = (state) => {
    return { }
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
        this.props.categoryAdded(this.state.newCategory);
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="Category name" onChange={this.updateCategory} />
                <button onClick={this.addCategory}>Add</button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);
