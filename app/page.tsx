'use client';

import { useState } from 'react';
import useSWR from 'lib/swr';
import { Song } from 'types';
import { useRouter } from 'next/navigation';
import { Search, Art, Loading, Tracks, Empty } from 'ui';

export default function Page() {
  const [query, setQuery] = useState('');

  const [results, isLoading] = useSWR(`/api/search?q=${query}`) as [
    Song[],
    boolean,
  ];

  const router = useRouter();

  return (
    <div className="mx-auto max-w-4xl">
      {query && <title>{query}</title>}

      <Search
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) =>
          e.key === 'Enter' && results && router.push(results[0].api_path)
        }
      />

      {query === '' ? (
        <div className="center">
          <Art
            src="https://images.genius.com/483306c535608c27f9e3781b854dc91d.1000x1000x1.png"
            alt="Kendrick Lamar - HUMBLE."
            size={420}
          />
        </div>
      ) : isLoading ? (
        <Loading />
      ) : results.length > 0 ? (
        <Tracks songs={results} />
      ) : (
        <Empty />
      )}
    </div>
  );
}
