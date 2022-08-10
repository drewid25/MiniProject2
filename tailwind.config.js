/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xsm:'375px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      slg: '1024px',
      mlg:'1280px',
      xl: '1445px',
      xxl: '1920px'
    },
    extend: {
      colors: {
        yellow7: "#f59f00",
        yellow8: "#f08c00",
        yellow6: "#fab005",
        gray7: "#495057",
        gray8: "#343a40",
        gray9:"#343a40"
      }
    },
  },
  plugins: [],
}
