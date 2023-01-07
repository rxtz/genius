import { NextApiHandler } from 'next';
import { genius } from 'lib/genius';

const handler: NextApiHandler = async (req, res) => {
  const { q } = req.query;
  const data = await genius(`search?q=${q}`);

  res.json(data.response.hits.map(({ result }) => result));
};

export default handler;
