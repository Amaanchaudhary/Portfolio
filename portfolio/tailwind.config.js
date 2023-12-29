/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'max' : '640px'},
      // => @media (min-width: 640px) { ... }

      'md':  {'min' : '640px', 'max' : '768px'},
      // => @media (min-width: 768px) { ... }

      'lg': {'min' : '768px', 'max' : '1024px'},
      // => @media (min-width: 1024px) { ... }

      'xl': {'min' : '1024px', 'max' : '1280px'},
      // => @media (min-width: 1280px) { ... }

      '2xl':{'min' : '1280px', 'max' : '1536px'} ,
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      screens : {
        'mobile' : {'max' : '500px'},
        'tablet' : {'min' : '500px' , 'max' : '770px'},
        'laptop' : {'min' : '770px'}
      },
    },
  },
  plugins: [],
}

