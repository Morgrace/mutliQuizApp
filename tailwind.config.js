/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  //   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  //   theme: {
  //     fontFamily: {
  //       sans: 'Roboto Mono, monospace',
  //     },

  //     extend: {
  //       fontSize: {
  //         huge: ['80rem', { lineHeight: '1' }],
  //       },
  //       height: {
  //         screen: '100dvh',
  //       },
  //     },
  //   },
  //   plugins: [],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'fill-[#78909C]',
    'fill-[#1E88E5]',
    'fill-[#4CAF50]',
    'fill-[#F44336]',
    'fill-[#9C27B0]',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
