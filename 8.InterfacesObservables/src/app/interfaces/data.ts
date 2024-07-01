export interface Languages {
  id: number;
  name: string;
}

export interface Student {
  id: number;
  name: string;
  phone: string;
  age: string;
  languages: Array<string>;
}

interface Order {
  OrderType: string;
  Price: number;
  Volume: number;
}

export interface OrderBook {
  BuyOrders: Array<Order>;
  CreatedTimestampUtc: string;
  SellOrders: Array<Order>;
}

interface Price {
  bid: string;
  ask: string;
  last: string;
}

export interface LatestPrices {
  status: string;
  prices: {
    btc: Price;
    ltc: Price;
    doge: Price;
  };
}
