import React, { Component } from 'react';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <form action={"#"}>
                    <input type={"text"}
                           placeholder={"Filter"}
                           onChange={this.props.updateChange}/>
                </form>
            </>
        );
    }
}

export default SearchBox;