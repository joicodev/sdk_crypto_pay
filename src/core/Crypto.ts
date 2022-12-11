import {generateMnemonic} from 'bip39';

export class Crypto {
  public static randomBytes = (length: number) => {
    const crypto = require('crypto');
    return crypto.randomBytes(length);
  }

  public static randomMnemonic = (strLength?: number, rng?: (size: number) => Buffer, wordlist?: string[]) => {
    return generateMnemonic(strLength, rng, wordlist);
  }
}
