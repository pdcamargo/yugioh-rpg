import { NextApiRequest, NextApiResponse } from 'next';

import axios from 'axios';
import fs from 'fs';

const route =
  'https://db.ygoprodeck.com/api/v7/cardinfo.php?offset=0&num=10000003';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    data: { data },
  } = await axios.get(route);

  const cards = JSON.stringify(data, null, 2);

  fs.writeFileSync('database/cards.json', cards);

  res.end(JSON.stringify({ name: 'John Doe' }));
}
