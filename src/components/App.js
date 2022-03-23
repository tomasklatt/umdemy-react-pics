import React from 'react';
import axios from "axios";
import SearchBar from './SearchBar';

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = (term) => {
        axios.get('https://api.unsplash.com/search/photos', {
            headers: {
                Authorization: `Client-ID ESPzNcgiJQP_xEyAZ6MBvYX64DyjFh4Q3Bof4VPzMFo`
            },
            params: {
                query: term
            }
        }).then((response) => {
            this.setState({ images: response.data.results});
        })
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
            </div>
        );
    }
}

export default App;