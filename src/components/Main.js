import React, { Component } from 'react';

const URL = 'https://jsonplaceholder.typicode.com/posts';

export default class Main extends Component {
state = {
    posts: [],
    error: null
}

fetchPosts(){
    fetch(`${URL}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'No Auth'
        }
    }).then( response => response.json())
      .then( data => {
          this.setState({
              posts: data
          })
          console.log(this.state.posts)
      })
      .catch( error => this.setState({ error }));
}

componentDidMount(){
    this.fetchPosts();
}
    render(){
        return (
            <div className="container">
                <h3>serhat</h3>
                
            </div>
        )
    }
}