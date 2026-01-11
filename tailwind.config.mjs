/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      'dark-blue': '#022859',
      'light-blue': '#F0F4F8',
      'dark-gray': '#333333',
      'light-gray': '#E0E0E0',
      'steel-blue': '#B0C4DE',
      'slate-gray': '#708090',
	  'light-brown': '#c29d70',
	  'dark-brown': '#5f3707ff',
	  'button':'#a46338ff',
	  'dark-green': '#495435',
	  'light-green': '#7B8F61',
    },
    fontFamily: {
      sans: ['Stolen Love Black', 'cursive'],
      serif: ['New Icon', 'serif'],
	  text: ['Cormorant Garamond', 'serif'],
	  header: ['Stolen Love Black'],
    },
    extend: {},
  },
  plugins: [],
  
}
