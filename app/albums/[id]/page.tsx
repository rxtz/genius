'use client';

import useSWR from 'lib/swr';
import { Album } from 'types';
import { Loading, Art } from 'ui';

export default function Page({ params }) {
  const { id } = params;

  const [album, isLoading] = useSWR(`/api/albums/${id}`) as [Album, boolean];

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <title>{`${album.name} - ${album.artist.name}`}</title>

      <h1>
        {album.name} - {album.artist.name}
      </h1>
      <h2>{album.release_date}</h2>
      <Art src={album.cover_art_url} alt={album.name} size={512} />
    </>
  );
}
