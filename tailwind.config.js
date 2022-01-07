module.exports = {
  content: [
    "./public/*.html"
  ],
  theme: {
    extend: {
      screens:{
        'max-md': {'max':'767px'},
        'max-sm': {'max':'640px'},
        'vsm': '480px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
