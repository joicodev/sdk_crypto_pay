import bip39 from 'bip39';

export class CryptoUtils {
  /**
   *
   * @returns
   */
  public static generateMnemonic(): string {
    return bip39.generateMnemonic();
  }
}
