import { NextApiHandler } from 'next';
import { resources, genius } from 'lib/genius';

const handler: NextApiHandler = async (req, res) => {
  const { resource, id } = req.query as { resource: any; id: string };

  if (!resources.includes(resource)) {
    res.status(404).send({ error: '404 Not Found' });
  }

  const data = await genius(`${resource}/${id}`);
  const { status } = data.meta;

  res
    .status(status)
    .send(
      status === 200 ? data.response[resource.replace(/.$/g, '')] : data.meta,
    );
};

export default handler;
