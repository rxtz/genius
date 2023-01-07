import { Song } from 'types';
import useSWR from 'lib/swr';
import { Loading, Empty, Liga } from 'ui';

export default function Lyrics({ song }: { song: Song }) {
  const query = `${song.url
    .replace('https://genius.com/', '')
    .replace('-lyrics', '')
    .toLowerCase()}`;

  const [data, isLoading] = useSWR(`/api/lyrics/${query}`) as [
    { lyrics: string },
    boolean,
  ];

  // annotations

  return isLoading ? (
    <Loading />
  ) : data.lyrics ? (
    <div className="!font-medium">
      {data.lyrics
        .replace(/\n\n\[/g, '\n[')
        .split('\n')
        .map((bar, i) =>
          bar[0] === '[' || bar === '' ? (
            <div className="py-4 text-neutral-400 text-center" key={i}>
              {bar}
            </div>
          ) : (
            <div
              className="bling p-2 lg:text-xl overflow-hidden"
              tabIndex={i}
              key={i}
            >
              {bar}
            </div>
          ),
        )}
    </div>
  ) : (
    <>
      <Empty />
      <div className="mt-4 text-center">
        por favor colabore en
        <br />
        <Liga href={song.url}>genius.com</Liga>
      </div>
    </>
  );
}
