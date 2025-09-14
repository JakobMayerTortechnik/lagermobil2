export type Item = {
  id: string;
  name: string;
  articleNumber: string;
  listPrice: number;
  currentStock: number;
  targetStock: number;
  incrementStep: number;
};

export type AssemblyItem = {
  itemId: string;
  name: string;
  articleNumber: string;
  quantityConsumed: number;
};

export type Assembly = {
  id: string; 
  commission: string;
  date: string; // ISO date string
  items: AssemblyItem[];
};
