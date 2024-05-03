export type TCamera = {
  id: number;
  name: string;
  vendorCode: string;
  type: ProductType;
  category: ProductCategory;
  description: string;
  level: ProductLevel;
  price: number;
  rating: number;
  reviewCount: number;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
}

export type TPromo = {
  id: number;
  name: string;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
}

export type TReview = {
  id: string;
  createAt: string;
  cameraId: number;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  rating: number;
}

export type TUserReview = {
  cameraId: number;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  rating: number;
}

export enum ProductType {
  Collectible = 'Коллекционная',
  Instant = 'Моментальная',
  Digital = 'Цифровая',
  Analog = 'Пленочная',
}

export enum ProductCategory {
  Photo = 'Фотоаппарат',
  Video = 'Видеокамера',
}

export enum ProductLevel {
  Loser = 'Нулевой',
  Amateur = 'Любительский',
  Professional = 'Профессиональный',
}

export enum FetchStatus {
  Idle = 'idle',
  Pending = 'loading',
  Fulfilled = 'succes',
  Rejected = 'error'
}

export enum SortedOptions {
  Price = 'sortPrice',
  Popular = 'sortPopular',
  SortUp = 'sortUp',
  SortDown = 'sortDown',
}

export type TSortFilter = {
  sortPricePopular: SortedOptions | string;
  sortUpDown: SortedOptions | string;
  filterCategory: ProductCategory | string;
  filterType: ProductType[];
  filterLevel: ProductLevel[];
  userMinPrice: number;
  userMaxPrice: number;
}

export type TUserPrices = {
  minPrice: string;
  maxPrice: string;
}
