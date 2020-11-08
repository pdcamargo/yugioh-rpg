export interface CardMonsterInfo {
  atk: number;
  def: number;
  level: number;
  attribute: string;
  type: string;
  effect_type: string | null;
  effect: boolean | null;
  fusion: boolean;
  link: boolean;
  synchro: boolean;
  pendulum: boolean;
  xyz: boolean;
  ritual: boolean;
}

export interface CardSpellInfo {
  property: string;
}

export interface CardPrice {
  duelist_point: number;
  credit: number;
}

export interface CardForeignInfoData {
  name: string;
  desc: string;
}

export interface CardForeignInfo {
  pt: CardForeignInfoData;
  jp: CardForeignInfoData;
}

export interface CardInfoType {
  id: number;
  name: string;
  desc: string;
  type: 'Spell' | 'Trap' | 'Monster';
  image_url: string;
  passcode: string;
  status: string;
  monster_info: CardMonsterInfo | null;
  spell_info: CardSpellInfo | null;
  price: CardPrice;
  foreign_info: CardForeignInfo;
}
