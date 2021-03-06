import React, { Component } from 'react';
import { connect } from "react-redux";
import { addCategory } from 'actions/category';

const mapDispatchToProps = { addCategory };
const mapStateToProps = (state) => Object();

class AddCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newCategory: "",
            isCreating: false,
            hasCreatedNewCategory: false,
            timer: undefined,
        };

        this.addCategory = this.addCategory.bind(this);
        this.updateCategory = this.updateCategory.bind(this);
    }

    componentWillUnmount() {
        if (this.state.timer) {
            clearTimeout(this.state.timer);
        }
    }

    updateCategory(e) {
        this.setState({
            newCategory: e.target.value
        });
    }
    async addCategory() {
        this.setState({ isCreating: true });
        await this.props.addCategory(this.state.newCategory);
        this.setState({
            hasCreatedNewCategory: true,
            timer: setTimeout(() => this.setState({hasCreatedNewCategory: false, isCreating: false}), 5000),
        });
    }

    render() {
        let confirmMessage = '';
        if (this.state.hasCreatedNewCategory) {
            confirmMessage = <div>Category added</div>
        }
        return (
            <div>
                {confirmMessage}
                <input type="text" placeholder="Category name" onChange={this.updateCategory} disabled={this.state.isCreating}/>
                <button onClick={this.addCategory} disabled={this.state.isCreating}>Add</button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategory);
