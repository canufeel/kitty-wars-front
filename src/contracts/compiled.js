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
  [playerRepoContractName]: playerRepo,
  [itemOwnershipContractName]: itemOwnership,
}) => {
  const playerState = {
    players: [],
    armors: [],
    weapons: [],
    battles: [],
  };
  const itemEvents = await itemOwnership.getPastEvents('ItemForged');
  const playerEvents = await playerRepo.getPastEvents('PlayerAdded');
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
  if (playerEvents.length) {
    for (event in playerEvents) {
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
  const account = getAccount();

  const contracts = await getAllContracts();
  return {
    account,
    contracts,
  }
};
