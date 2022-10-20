/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/shared/**/*.{js,ts,jsx,tsx}',
    './src/config/**/*.{js,ts,jsx,tsx}',
    './src/Home/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        AvenirBlack: ['AvenirBlack']
      },
      colors: {
        secondary: '#0a1133',
        primary: '#ffc107',
        softGrey: '#797979',
        lightGrey: '#a5a5a5'
      },
      width: {
        '1/8': '20.5%'
      },
      minHeight: {
        200: '200px'
      },
      boxShadow: {
        '5xl': '0 6px 22px hsl(230deg 5% 51% / 10%)'
      }
    }
  },

  variants: {
    extend: {
      fontFamily: ['hover', 'focus']
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
  corePlugins: {
    fontFamily: true
  }
}
