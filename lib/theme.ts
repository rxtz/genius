import { Themes } from '@geist-ui/core';
import tailwind from 'tailwind.config';
import localFont from '@next/font/local';

export const t = tailwind.theme.extend;

export const theme = Themes.createFromDark({
  type: 'genius',
  palette: {
    foreground: '#ddd',
    background: t.colors['carbon'],
    success: t.colors['genius'],
    selection: t.colors['ice'],
    code: t.colors['ice'],
    link: 'inherit',
  },
  font: {
    sans: 'inherit',
    mono: 'inherit',
  },
});

export const font = localFont({
  src: '../public/Hubot-Sans.woff2',
  fallback: ['ui-sans-serif, sans-serif'],
  weight: '400 800',
});
