import { Song } from 'types';

export const adapt = (string: string) =>
  string
    .toLowerCase()
    .replace(/\$/g, 's')
    .replace(/€/g, 'e')
    .normalize('NFD')
    .replace(/\s&\s/g, '-')
    .replace(/\s/g, '-')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[&\/#, +_()$~%.'":*!?<>{}|¡¿]/g, '');

export const number = (n: number) =>
  n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export const str = (object: any) => JSON.stringify(object);

export const videoId = (song: Song) =>
  (str(song.media).split('youtube.com/watch?v=')[1] ?? '').split('"')[0];
