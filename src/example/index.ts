import { AccountBitcoin } from "../model/AccountBitcoin";

(() => {
  const account = AccountBitcoin.createNew();
  console.log("privateKey", account)
})()
