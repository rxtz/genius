'use client';

import useSWR from 'lib/swr';
import { Song } from 'types';
import { Loading, Art, Liga, Video, About } from 'ui';
import { videoId } from 'lib/input';

export default function Page({ params }) {
  const { id } = params;

  const [song, isLoading] = useSWR(`/api/songs/${id}`) as [Song, boolean];

  return isLoading ? (
    <Loading />
  ) : (
    <div className="sm:flex items-stretch">
      <title>{`${song.title} - ${song.artist_names}`}</title>

      <div className="stick gradient sm:w-2/5 md:pt-[2vw] -p">
        <div className="bar pt-4 sm:pb-[4vh]">
          <div className="w-[72px] lg:w-2/5">
            <Art src={song.song_art_image_url} alt={song.title} size={200} />
          </div>
          <div className="flex-1 py-4 pl-4">
            <div className="lg:mb-2 lg:text-2xl font-semibold">
              {song.title}
            </div>
            <Liga href={song.primary_artist.api_path}>{song.artist_names}</Liga>
          </div>
        </div>

        <div className="fixed sm:relative bottom-0 left-0 right-0">
          <Video v={videoId(song)} />
        </div>
      </div>

      <div className="relative flex-1 sm:ml-8">
        <About song={song} />
        <div className="-p aspect-video sm:hidden"></div>
      </div>
    </div>
  );
}
