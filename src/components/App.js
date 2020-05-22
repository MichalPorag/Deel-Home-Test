import React from 'react';
import '../scss/app.scss';
import inputs from '../inputs';

import List from '../components/List';
import SearchBox from '../components/SearchBox';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.setState = {
            isListVisible: true,
            searchText: "",
            searchResults: [],
            // searchTerm:
        };
        this.filterUsers = this.filterUsers.bind(this);
    }

    componentDidMount() {
        // this.filterUsers();
    }

    handleChange(e) {
        console.log("I get here");
        console.log("e", e);
        this.setState = {
            ...this.state,
            searchText: e.target.value
        }
    }


    filterUsers() {
        if (this.state.searchText !== "") {
            let filteredText = inputs.filter(input =>
                input !== undefined &&
                input !== "" &&
                input.toLowerCase().indexOf(this.state.searchText.toLowerCase()) >= 0
            );
            this.setState = {
                ...this.state,
                searchText: filteredText
            }
        }
    }

    render() {
        return (
            <div className="App">
                <SearchBox updateChange={(e) => this.handleChange(e)} />
                {/*<List isVisible={this.state.isListVisible} />*/}
            </div>
        )
    }
}

export default App;
