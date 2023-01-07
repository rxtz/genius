import { Song, Artist } from 'types';
import Liga from 'ui/Liga';
import { Table } from '@geist-ui/core';

const credits = (role: string, artists: Artist[]) => ({
  role: role,
  artist: artists.map((a, i) => (
    <>
      <Liga href={a.api_path} key={i}>
        {a.name}
      </Liga>
      {artists.length > ++i && <>,&nbsp;</>}
    </>
  )),
});

export default function Credits({ song }: { song: Song }) {
  return (
    <>
      <Table
        data={[
          ...['Featured','Producer', 'Writer',]
            .map((r) => credits(r, song[`${r.toLowerCase()}_artists`]))
            .filter((c) => c.artist.length > 0),
          ...song.custom_performances.map((c) => credits(c.label, c.artists)),
        ]}
      >
        {['role', 'artist'].map((c, i) => (
          <Table.Column prop={c} label={c} key={i} />
        ))}
      </Table>

      {song.song_relationships.map(
        (r, i) =>
          r.songs.length > 0 && (
            <nav className="mt-4" key={i}>
              <h3 className="text-neutral-400">{r.type}</h3>
              <ul>
                {r.songs.map((s, i) => (
                  <li key={i}>
                    <Liga href={s.api_path}>{s.full_title}</Liga>
                  </li>
                ))}
              </ul>
            </nav>
          ),
      )}
    </>
  );
}
