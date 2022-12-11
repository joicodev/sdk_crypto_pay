import { AccountBitcoin } from '../model';

(() => {
  const account = AccountBitcoin.randomMnemonic();
  console.log("generateFromMnemonic", account)
})()
