import { ReactNode } from 'react';

interface Referable {
  id: number;
  url: string;
  api_path: string;
}

interface Name {
  name: string;
}

interface Track {
  full_title: string;
  release_date: string;
  pyongs_count: number;
  description: ReactNode;
  header_image_url: string;
}

interface Title {
  title: string;
}

export interface Annotation extends Referable {
  body: {
    dom: HTMLCollection;
  };
  has_voters: boolean;
  votes_total: number;
  comment_count: number;
  pinned: boolean;
  verified: boolean;
  community: boolean;
}

export interface Album extends Referable, Name, Track {
  artist: Artist;
  song_pageviews: number;
  comment_count: number;

  cover_art_url: string;
  header_image_url: string;
}

export interface User extends Referable {
  iq?: number;
  followers_count: number;

  instagram_name: string;
}

export interface Artist extends User, Name {
  alternate_names: string[];
  image_url: string;
  is_verified: boolean;
}

export interface Song extends Referable, Title, Track {
  title_with_featured: string;
  artist_names: string;
  album?: Album;

  primary_artist: Artist;
  featured_artists: Artist[];
  producer_artists: Artist[];
  writer_artists: Artist[];
  custom_performances: { label: string; artists: Artist[] }[];

  language: string;
  lyrics_state: 'complete' | 'incomplete' | 'unreleased';
  annotation_count: number;
  song_relationships: {
    type: string;
    url: string;
    songs: Song[];
  }[];

  stats: {
    pageviews: number;
    hot: boolean;
  };

  song_art_image_url: string;
  media: {
    provider: 'youtube' | 'spotify' | 'soundcloud';
    type: 'video' | 'audio';
    url: string;
  }[];
}
