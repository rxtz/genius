/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'app/**/*.{js,ts,jsx,tsx}',
    'ui/**/*.{js,ts,jsx,tsx}',
    // https://github.com/vercel/next.js/issues/43878#issuecomment-1344883913
    '!node_modules',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: 'JetBrains Mono, ui-monospace, monospace',
      },
      colors: {
        genius: '#ff0',
        ice: '#0ff',
        carbon: '#161616',
        basalt: '#080808',
      },
    },
  },
};
