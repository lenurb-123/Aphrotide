
export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  emotionalTag: string;
  imageUrl: string;
  category: 'minimalist' | 'statement' | 'sculpt' | 'sensual';
}

export interface CartItem extends Product {
  quantity: number;
}

export type BodyType = 'hourglass' | 'wide-hips' | 'narrow-hips' | 'none';
export type TummyType = 'flat' | 'curvy' | 'marked' | 'none';
export type SkinTone = 'dark' | 'light' | 'medium' | 'none';

export interface RecommendationProfile {
  bodyType: BodyType;
  tummyType: TummyType;
  skinTone: SkinTone;
}
