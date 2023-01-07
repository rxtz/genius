import { NextApiHandler } from 'next';
import { getLyrics } from 'genius-lyrics-api';

const handler: NextApiHandler = async (req, res) => {
  const { query } = req.query;
  const lyrics = await getLyrics(`https://genius.com/${query}-lyrics`);

  res.json({ lyrics: lyrics });
};

export default handler;
