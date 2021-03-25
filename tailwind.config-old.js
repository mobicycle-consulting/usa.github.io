// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            'iPhone SE': '320px',
            // => @media (min-width: 320x) { ... }

            'Android': '360px',
            // => @media (min-width: 360px) { ... }

            'iPhone 8': '375px',
            // => @media (min-width: 375px) { ... }

            'Google Pixel 2': '411px',
            // => @media (min-width: 411px) { ... }

            'iPhone 11 Pro X': '414px',
            // => @media (min-width: 414px) { ... }

            'iPad mini': '768px',
            // => @media (min-width: 768px) { ... }

            'iPad Pro 11': '834px',
            // => @media (min-width: 834px) { ... }

            'iPad Pro 12.9': '1024px',
            // => @media (min-width: 1024px) { ... }

            'Surface Pro 4': '1368px',
            // => @media (min-width: 1368px) { ... }

            'Surface Pro 3': '1440px',
            // => @media (min-width: 1440px) { ... }

            'MacBook': '1152px',
            // => @media (min-width: 1152px) { ... }

            'iMac': '1280px',
            // => @media (min-width: 1280px) { ... }

            'Surface Book': '1500px',
            // => @media (min-width: 1500px) { ... }
        },
        colors: {
            gray: colors.coolGray,
            blue: colors.lightBlue,
            red: colors.rose,
            pink: colors.fuchsia,
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            }
        },
    },
    variants: {
        extend: {
            borderColor: ['focus-visible'],
            opacity: ['disabled'],
        },
    },
    plugins: [],
}