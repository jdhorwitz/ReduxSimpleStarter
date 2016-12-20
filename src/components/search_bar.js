import React, { Component } from 'react';

export default class SearchBar extends Component {
  contructor(props) {
    super(props);

    this.state = { term: '' };
  }
  render () {
    return <input onChange={(event) => console.log(event.target.value)} />;
  }
};