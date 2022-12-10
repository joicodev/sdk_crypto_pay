import { AccountBitcoin } from '../model';

(() => {
  const account = AccountBitcoin.createNew();
  console.log("address", account.address)
})()
