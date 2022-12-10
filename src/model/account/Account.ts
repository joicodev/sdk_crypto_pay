import {IChainType} from '../ChainTypes';

export interface IKeyPair {
  privateKey: Uint8Array;
  publicKey: Uint8Array;
}

export abstract class Account {
   protected constructor(
    // The account address.
    public readonly address: string,
    //The account keyPair, public and private key.
    private readonly keyPair: IKeyPair,
    // public ready
    public readonly chainType: IChainType
  ) {}

  get publicKey(): Uint8Array {
    return this.keyPair.publicKey;
  }

  get privateKey(): Uint8Array {
    // return convert.uint8ToHex(this.keyPair.privateKey);
    return this.keyPair.privateKey;
  }
}
