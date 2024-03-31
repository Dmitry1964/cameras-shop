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

export enum ProductType {
  Collectible = 'Коллекционная',
  Instant = 'Моментальная',
  Digital = 'Цифровая',
  Analog = 'Пленочная',
}

export enum ProductCategory {
  Video = 'Видеокамера',
  Photo = 'Фотокамера',
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

