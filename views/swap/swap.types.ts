import { Token } from '@interest-protocol/sui-tokens';
import { RouterCompleteTradeRoute, RouterTradePath } from 'aftermath-ts-sdk';

export interface ISwapSettings {
  slippage: string;
  interval: string;
}

export interface SwapToken extends Token {
  value: string;
  usdPrice: number | null;
}

export interface SwapForm {
  to: SwapToken;
  from: SwapToken;
  loading: boolean;
  error: string | null;
  fetchingPrices: boolean;
  settings: ISwapSettings;
  lastFetchDate: number | null;
  route: RouterCompleteTradeRoute | null;
  swapPath: ReadonlyArray<RouterTradePath>;
}

export interface SwapPreviewModalProps {
  onClose: () => void;
}
