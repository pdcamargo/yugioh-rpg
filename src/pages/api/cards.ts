import { NextApiRequest, NextApiResponse } from 'next';

import fs from 'fs';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const rawCards = fs.readFileSync('database/cards.json');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let cards: any[] = JSON.parse(`${rawCards}`);

  const params = req.query;

  if (params.name) {
    const name = `${params.name}`.toLowerCase();
    cards = cards.filter(
      (card) => (card.name as string).toLowerCase().indexOf(name) >= 0
    );
  }

  let perPage = params.perPage ? +params.perPage : 25;
  let currentPage = params.page ? +params.page : 1;

  if (currentPage < 1) {
    currentPage = 1;
  }

  if (perPage > 100) {
    perPage = 100;
  }

  const totalPage = Math.ceil(cards.length / perPage);
  const nextPage = currentPage + 1;

  const hasNextPage = nextPage <= totalPage;
  const hasPreviousPage = currentPage > 1;

  let data = cards.slice((currentPage - 1) * perPage, currentPage * perPage);

  const keys = params.property ? `${params.property}`.split(',') : [];

  data = data.map((card) => {
    const newObject = {};

    keys.forEach((key) => {
      if (
        keys.length > 0 &&
        Object.keys(card).includes(key) &&
        // eslint-disable-next-line no-prototype-builtins
        card.hasOwnProperty(key)
      ) {
        newObject[key] = card[key];
      }
    });

    return Object.keys(newObject).length > 0 ? newObject : card;
  });

  res.json({
    total: cards.length,
    perPage,
    totalPage,
    hasNextPage,
    hasPreviousPage,
    data,
  });
}
