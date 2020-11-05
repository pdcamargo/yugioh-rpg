export type CardSet = {
  set_name: string;
  set_code: string;
  set_rarity: string;
  set_rarity_code: string;
  set_price: string;
};

export type CardImage = {
  id: number;
  image_url: string;
  image_url_small: string;
};

export type CardPrice = {
  cardmarket_price: string | undefined;
  tcgplayer_price: string | undefined;
  ebay_price: string | undefined;
  amazon_price: string | undefined;
  coolstuffinc_price: string | undefined;
};

export type Card = {
  id: number;
  name: string;
  type: string;
  desc: string;
  /**
   * Race is also used for spells
   */
  race: string;
  attribute: string;
  archetype: string;
  card_sets: CardSet[];
  card_images: CardImage[];
  card_prices: CardPrice[];
  /**
   * Only monster prop
   */
  atk: number | undefined;
  /**
   * Only monster prop
   */
  def: number | undefined;
  /**
   * Only monster prop
   */
  level: number | undefined;
};
