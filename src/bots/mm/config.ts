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
  // AGGRESSION: 2 bps (0.02%). Very tight to capture high volume.
  spreadBps: 2, 
  
  // PROFIT: 1 bp (0.01%). Tells the bot to flip and exit trades quickly.
  takeProfitBps: 1, 

  // YOUR LIMITS: $25 per order. 
  // On a $100 account, this allows 4 "layers" of orders.
  orderSizeUsd: 25, 

  // MAX POSITION: $300 (3x leverage).
  closeThresholdUsd: 300, 

  warmupSeconds: 5, 

  // SPEED: 50ms refresh. This is very aggressive.
  updateThrottleMs: 50, 

  orderSyncIntervalMs: 2000, 

  // LOGGING: Keep this at 10000 (10 sec) so Railway doesn't block your logs.
  statusIntervalMs: 10000, 

  fairPriceWindowMs: 5 * 60 * 1000,
  positionSyncIntervalMs: 3000,
}
