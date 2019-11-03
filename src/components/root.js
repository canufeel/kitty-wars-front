import React, { Component } from 'react';
import { getAllContractsAndAccount } from '../contracts/compiled';

class Root extends Component {
  state = {
    contracts: {},
    account: null,
  };
  componentDidMount = async () => {
    const state = await getAllContractsAndAccount();
    this.setState({
      ...state
    });
  };

  render() {
    return (<div>Hello from KittieWars</div>);
  }
}


export default Root;
