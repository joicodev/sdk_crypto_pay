import {ChainType} from "../ChainTypes";
import {Account, IKeyPair} from './Account';
import {Crypto} from "../../core/Crypto";

export class AccountBitcoin extends Account {
  /**
   * Creates an instance of AccountBitcoin.
   * @param {string} address
   * @param {IKeyPair} keyPair
   * @memberof AccountBitcoin
   */
  private constructor(
    // The account address.
    public readonly address: string,
    //The account keyPair, public and private key.
    keyPair: IKeyPair,
  ) {
    super(address, keyPair, {
      name: "Bitcoin",
      symbol: "BTC",
      networkType: "",
      chainType: ChainType.BITCOIN
    });
  }

  static generateNewAccount() {
    return "";
  }



  // static createNew() {
  //   const keyPair = []
  //   return new AccountBitcoin(
  //     "1234567",
  //     {
  //       publicKey: new Uint8Array(64),
  //       privateKey: new Uint8Array(64),
  //     },
  //   );
  // }
}

