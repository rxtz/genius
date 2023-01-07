'use client';

import useSWR from 'lib/swr';
import { Artist } from 'types';
import { Loading, Art } from 'ui';

export default function Page({ params }) {
  const { id } = params;

  const [artist, isLoading] = useSWR(`/api/artists/${id}`) as [Artist, boolean];

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <title>{artist.name}</title>

      <div className="center text-center text-4xl font-semibold">
        <div className="mx-auto w-max mb-4 rounded-full">
          <Art src={artist.image_url} alt={artist.name} size={256} rounded />
        </div>
        {artist.name}
        {artist.iq && <span className="ml-4 text-ice">{artist.iq}</span>}
      </div>
    </>
  );
}
