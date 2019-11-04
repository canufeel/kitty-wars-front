import Battle from "../../../kitty-wars/build/contracts/Battle.json";
import KittyOwnership from '../../../kitty-wars/build/contracts/KittyOwnership.json';
import ItemOwnership from '../../../kitty-wars/build/contracts/ItemOwnership.json';
import PlayerRepo from '../../../kitty-wars/build/contracts/PlayerRepo.json';
import Proxy from '../../../kitty-wars/build/contracts/Proxy.json';

import { getWeb3 } from './web3';

const battleContractName = 'Battle';
const itemOwnershipContractName = 'KittyOwnership';
const playerRepoContractName = 'PlayerRepo';
const proxyContractName = 'Proxy';

const allContracts = {
  [battleContractName]: Battle,
  KittyOwnership,
  [itemOwnershipContractName]: ItemOwnership,
  [playerRepoContractName]: PlayerRepo,
  [proxyContractName]: Proxy,
};

const getAccount = () => window.ethereum.selectedAddress;

const getPlayerState = async ({


}) => {
  const playerState = {
    players: [],
    armors: [],
    weapons: [],
    battles: [],
  };


  const weapons = [];
  const armors = [];
  if (itemEvents.length) {
    for (event in itemEvents) {
      const {
        itemId,
        itemType,
        itemPower,
      } = event.returnValues;
      if (itemType === '0') {
        weapons.push({
          itemId,
          itemPower,
        })
      } else {
        armors.push({
          itemId,
          itemPower,
        });
      }
    }
  }

  const players = [];

};

const getAllContracts = async () => {
  const web3 = await getWeb3();
  const networkId = await web3.eth.net.getId();
  return Object.entries(allContracts)
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
      }), {}
    );
};

export const getAllContractsAndAccount = async () => {
  const contracts = await getAllContracts();
  const account = getAccount();
  return {
    account,
    contracts,
  }
};


export const getItemEvents = async () => {
  const {
    [itemOwnershipContractName]: itemOwnership,
  } = await getAllContracts();
  const events = await itemOwnership.getPastEvents('ItemForged');
  return events.map(evt => evt.returnValues);
};

export const getPlayers = async () => {
  const {
    [playerRepoContractName]: playerRepo,
  } = await getAllContracts();
  const events = await playerRepo.getPastEvents('PlayerAdded');
  const players = [];
  if (events.length) {
    for (event in events) {
      const [
        weaponId,
        armorId,
        kittyId,
      ] = await playerRepo.getPlayer(event.returnValues.playerAddress);
      players.push({
        weaponId,
        armorId,
        kittyId,
      });
    }
  }
  return players;
};
