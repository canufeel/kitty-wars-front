import Battle from "../../../kitty-wars/build/contracts/Battle.json";
import KittyOwnership from '../../../kitty-wars/build/contracts/KittyOwnership.json';
import ItemOwnership from '../../../kitty-wars/build/contracts/ItemOwnership.json';
import PlayerRepo from '../../../kitty-wars/build/contracts/PlayerRepo.json';

import { getWeb3 } from './web3';

const allContracts = {
  Battle,
  KittyOwnership,
  ItemOwnership,
  PlayerRepo
};

export const getAllContractsAndAccount = async () => {
  const web3 = await getWeb3();

  // Use web3 to get the user's accounts.
  const account = window.ethereum.selectedAddress;

  // Get the contract instance.
  const networkId = await web3.eth.net.getId();
  return {
    account,
    contracts: Object.entries(allContracts)
      .reduce(
        (
          acc,
          [key, value]
        ) => ({
          ...acc,
          [key]: new web3.eth.Contract(
            value.abi,
            value.networks[networkId] && value.networks[networkId].address,
          ),
        })
      )
  };
};
