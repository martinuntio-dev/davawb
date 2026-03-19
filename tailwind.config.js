/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
          brand: {
              forest: '#E62B2B', action: '#C52222', mint: '#FFF5F5', gold: '#D4AF37', navy: '#2B0505',   
          },
          dava: {
              red: '#E3282B', green: '#2C5E35', beige: '#F2EFE9', dark: '#333333'
          },
          neutral: {
              soft: '#F8F9FA', text: '#212529', muted: '#6C757D'
          }
      },
      fontFamily: {
          sans: ['Montserrat', 'system-ui', 'sans-serif'],
          serif: ['Roboto', 'sans-serif'], 
          title: ['Montserrat', 'sans-serif'],
          body: ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
          'card': '0 4px 6px rgba(0,0,0,0.05)',
          'card-hover': '0 10px 15px rgba(230, 43, 43, 0.1)', 
      },
      borderRadius: {
          'std': '4px', 'card': '8px',
      },
      maxWidth: {
          'container': '1200px',
      },
      keyframes: {
          'pulse-glow': {
              '0%': { boxShadow: '0 0 0 0 rgba(227, 40, 43, 0.7)' },
              '70%': { boxShadow: '0 0 0 15px rgba(227, 40, 43, 0)' },
              '100%': { boxShadow: '0 0 0 0 rgba(227, 40, 43, 0)' }
          }
      },
      animation: {
          'pulse-glow': 'pulse-glow 2s infinite',
      }
    },
  },
  plugins: [],
}