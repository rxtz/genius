export const resources = ['albums', 'annotations', 'artists', 'songs'];

export const genius = async (slug: string) =>
  await fetch(`https://api.genius.com/${slug}`, {
    headers: [['Authorization', `Bearer ${process.env.GENIUS_API_TOKEN}`]],
  }).then((data) => data.json());

export const options = (query: string | string[]) => ({
  optimizeQuery: true,
  apiKey: process.env.GENIUS_API_TOKEN,
  artist: query,
  title: ' ',
});
