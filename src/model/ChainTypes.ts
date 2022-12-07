export enum ChainType {
  // NETWORK BITCOIN
  BITCOIN = 'btc',
  // TRC20 USDT
  USDT_TRC20 = 'usdt_trc20'
}

export interface IChainType {
  name: string,
  symbol: string,
  networkType: string
  chainType: ChainType
}

export class ChainDataType {
  private constructor(
    public readonly name: string,
    public readonly symbol: string,
    public readonly networkType: string
  ) {}
}
