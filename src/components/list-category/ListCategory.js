import React, { Component } from 'react';
import { connect } from "react-redux";
import { DeleteCategory } from 'components';

const mapStateToProps = (state) => {
    return {
        categories: state.category.categories,
        hasPermissionToDelete: state.user.isLogged,
    }
};

class ListCategory extends Component {
    render() {
        let categoryList = [];
        for (const key in this.props.categories) {
            const category = this.props.categories[key];
            let toDelete = "";
            if (this.props.hasPermissionToDelete) {
                toDelete = <DeleteCategory categoryID={key} />;
            }
            categoryList.push(
                <li key={key}>
                    <a href={category} key={key}>
                        {category}
                    </a>
                    {toDelete}
                </li>
            );
        }
        return <ul>{categoryList}</ul>;
    }
}


export default connect(mapStateToProps, {})(ListCategory);
