import { Song } from 'types';
import Link from 'next/link';
import { Art } from 'ui';

export default function Tracks({ songs }: { songs: Song[] }) {
  return (
    <ul className="m-0">
      {songs.map((s, i) => {
        return (
          <Link href={s.api_path} className="bar p-2 bling" passHref key={i}>
            <div className="mr-4 rounded-sm bg-neutral-600">
              <Art src={s.song_art_image_url} alt={s.title} size={64} />
            </div>
            <div className="flex-1">
              <div className="font-medium">{s.title}</div>
              <div className="text-genius">{s.artist_names}</div>
            </div>
          </Link>
        );
      })}
    </ul>
  );
}
