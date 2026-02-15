// MarketMaker configuration

export interface MarketMakerConfig {
  readonly symbol: string 
  readonly spreadBps: number 
  readonly takeProfitBps: number 
  readonly orderSizeUsd: number 
  readonly closeThresholdUsd: number 
  readonly warmupSeconds: number 
  readonly updateThrottleMs: number 
  readonly orderSyncIntervalMs: number 
  readonly statusIntervalMs: number 
  readonly fairPriceWindowMs: number 
  readonly positionSyncIntervalMs: number 
}

export const DEFAULT_CONFIG: Omit<MarketMakerConfig, 'symbol'> = {
  spreadBps: 4,               // 0.04% spread (Aggressive)
  takeProfitBps: 2,           // 0.02% profit target
  orderSizeUsd: 25,           // $25 per order
  closeThresholdUsd: 300,     // $300 max position (3x leverage)
  warmupSeconds: 5,           
  updateThrottleMs: 50,       // Fast updates
  orderSyncIntervalMs: 2000,
  statusIntervalMs: 1000,
  fairPriceWindowMs: 5 * 60 * 1000, 
  positionSyncIntervalMs: 3000,
}
