// tailwind.config.js
module.exports = {
    content: [
      './src/**/*.{html,js}', // Adjust according to your project structure
    ],
    theme: {
      extend: {
        colors: {
          scrollbar: {
            DEFAULT: '#0000FF', // Default scrollbar color
            hover: '#00008B', // Scrollbar color on hover
          },
        },
      },
    },
    plugins: [
      function ({ addUtilities }) {
        addUtilities({
          '.scrollbar': {
            '&::-webkit-scrollbar': {
              width: '12px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#0000FF',
              borderRadius: '9999px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#00008B',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: '#232A37',
            },
          },
        });
      },
    ],
  };

  
 
