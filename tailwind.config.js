/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/shared/**/*.{js,ts,jsx,tsx}',
    './src/config/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        AvenirBlack: ['AvenirBlack']
      },
      colors: {
        secondary: '#0a1133',
        primary: '#ffc107'
      },
      width: {
        '1/8': '20.5%'
      }
    }
  },

  variants: {
    extend: {
      fontFamily: ['hover', 'focus']
    }
  },
  plugins: [],
  corePlugins: {
    fontFamily: true
  }
}
