import { IChainType } from "./ChainTypes";

export interface IKeyPair {
  privateKey: Uint8Array;
  publicKey: Uint8Array;
}

export class Account {
  constructor(
    // The account address.
    public readonly address: string,
    //The account keyPair, public and private key.
    private readonly keyPair: IKeyPair,
    // public ready
    public readonly chainType: IChainType
  ) { }

  get publicKey(): string {
    return this.keyPair.publicKey.toString();
  }

  get privateKey(): string {
    // return convert.uint8ToHex(this.keyPair.privateKey);
    return this.keyPair.privateKey.toString();
  }
}
