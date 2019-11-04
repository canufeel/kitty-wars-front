import React, { Component } from 'react';
import { getAllContractsAndAccount } from '../contracts/compiled';
import InventoryPage from './inventory-page';

class Root extends Component {
  state = {
    contracts: {},
    account: null,
    kitty: null,
    armor: null,
    weapon: null,
    fight: {
      isFighting: null,
      hasCommittedDamage: null,
      hasResolvedDamage: null,
    },
  };
  componentDidMount = async () => {
    const newState = await getAllContractsAndAccount();
    this.setState({
      ...newState
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.account} Hello from KittieWars</p>
        <InventoryPage/>
      </div>
    );
  }
}


export default Root;
