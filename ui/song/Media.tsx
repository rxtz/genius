import { Song } from 'types';
import { Liga, Art } from 'ui';

export default function Media({ song }: { song: Song }) {
  return (
    <>
      <nav className="mb-4">
        {song.media.map((m, i) => (
          <Liga href={m.url} className="mr-4" key={i}>
            {m.provider}
          </Liga>
        ))}
      </nav>

      {song.album && (
        <div className="w-max max-w-full mx-auto text-center">
          <h1>
            <Liga href={song.album.api_path}>{song.album.name}</Liga>
          </h1>
          <Art
            src={song.album.cover_art_url}
            alt={song.album.name}
            size={512}
          />
        </div>
      )}
    </>
  );
}
