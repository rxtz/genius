import { Song } from 'types';
import { Badge } from '@geist-ui/core';
import {
  TrendingUp,
  Eye,
  ChevronsUp,
  Calendar,
  AlignLeft,
} from '@geist-ui/icons';
import { number } from 'lib/input';

export default function Stats({ song }: { song: Song }) {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
        {song.stats.hot && (
          <Badge type="success" className="!text-black">
            <TrendingUp /> HOT
          </Badge>
        )}

        {[
          { icon: <Eye />, data: number(song.stats.pageviews) },
          song.pyongs_count && {
            icon: <ChevronsUp />,
            data: number(song.pyongs_count!),
          },
          { icon: <Calendar />, data: song.release_date },
          { icon: <AlignLeft />, data: song.lyrics_state },
        ]
          .filter((b) => b)
          .map((b, i) => (
            <Badge key={i}>
              {b.icon} {b.data}
            </Badge>
          ))}
      </div>
    </>
  );
}
