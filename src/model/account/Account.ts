import {IChainType} from '../ChainTypes';
import {Crypto} from "../../core/Crypto";

export interface IMnemonicKeyPair {
  privateKey: Uint8Array;
  publicKey: Uint8Array;
  mnemonic: string;
}

export abstract class Account {
   protected constructor(
    // The account address.
    public readonly address: string,
    //The account keyPair, public and private key.
    private readonly mnemonicKeyPair: IMnemonicKeyPair,
    // public ready
    public readonly chainType: IChainType
  ) {}

  // Common methods
  get publicKey(): Uint8Array {
    return this.mnemonicKeyPair.publicKey;
  }

  get privateKey(): Uint8Array {
    return this.mnemonicKeyPair.privateKey;
  }

  get mnemonic(): string {
    return this.mnemonicKeyPair.mnemonic;
  }

  static randomMnemonic() {
    return Crypto.randomMnemonic();
  }
}
