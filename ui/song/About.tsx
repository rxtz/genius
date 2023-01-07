'use client';

import { Song } from 'types';
import { Lyrics, Credits, Stats, Media } from 'ui';
import { Tabs } from '@geist-ui/core';

export default function About({ song }: { song: Song }) {
  return (
    <Tabs initialValue="0" align="center">
      {[
        {
          label: 'Lyrics',
          content: <Lyrics song={song} />,
        },
        {
          label: 'Credits',
          content: <Credits song={song} />,
        },
        {
          label: 'Stats',
          content: <Stats song={song} />,
        },
        {
          label: 'Media',
          content: <Media song={song} />,
        },
      ].map((s, i) => (
        <Tabs.Item label={s.label} value={`${i}`} className="relative" key={i}>
          {s.content}
        </Tabs.Item>
      ))}
    </Tabs>
  );
}
