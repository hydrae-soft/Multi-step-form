/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      'marine-blue': 'hsl(var(--color-marine-blue) / 1)',
      'purplish-blue': 'hsl(var(--color-purplish-blue) / 1)',
      'pastel-blue': 'hsl(var(--color-pastel-blue) / 1)',
      'light-blue': 'hsl(var(--color-light-blue) / 1)',
      'strawberry-red': 'hsl(var(--color-strawberry-red) / 1)',

      'cool-gray': 'hsl(var(--color-cool-gray) / 1)',
      'light-gray': 'hsl(var(--color-light-gray) / 1)',
      'magnolia': 'hsl(var(--color-magnolia) / 1)',
      'alabaster': 'hsl(var(--color-alabaster) / 1)',
      'white': 'hsl(var(--color-white) / 1)',
      'transparent': 'transparent'
    }
  },
  plugins: [],
}

