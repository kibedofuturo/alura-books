/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor: {
        skin: {
          base: 'var(--text-color-base)',
          orange: 'var(--orange)',
          white: 'var(--white)',
        }
      },
      backgroundColor: {
        skin: {
          primary: 'var(--bg-color-primary)',
          white: 'var(--white)',
          blue: 'var(--bg-color-blue)',
        }
      },
      fontFamily: {
        'sans': 'var(--font-primary)',
      },
      colors:{
        'blue1': '#002F52',
        'blue2': '#326589'
      },
    },
  },
  plugins: [],
}
