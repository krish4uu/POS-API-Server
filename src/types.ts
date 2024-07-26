export type MenuResponse = {
    sections: Section[];
    items: Item[];
    modGroups: ModGroup[];
    mods: Mod[];
    discounts: Discount[];
    orderTypes: OrderType[];
  };
  
  type Section = {
    id: string;
    name: string;
    itemIds: string[];
    magicCopyKey: string;
    imageUrl: string;
  };
  
  type Item = {
    id: string;
    name: string;
    price: string;
    modGroupIds: string[];
    magicCopyKey: string;
    imageUrl: string;
  };
  
  type ModGroup = {
    id: string;
    name: string;
    modIds: string[];
    maxMods?: number;
    minMods?: number;
  };
  
  type Mod = {
    id: string;
    name: string;
    modGroupIds: string[];
    price: number;
  };
  
  type Discount = {
    id: string;
    name: string;
    amount?: number;
    rate?: number;
    couponCode?: string;
  };
  
  type OrderType = {
    id: string;
    name: string;
  };
  