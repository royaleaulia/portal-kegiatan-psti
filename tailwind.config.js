const daisyui = require('daisyui');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        "./resources/**/*.js",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [
        require('@tailwindcss/forms'),
        require("daisyui"),
        require('@tailwindcss/typography')
    ],

    daisyui: {
        // themes: [
        //     {
        //         // light: {
        //         //     ...require("daisyui/src/colors")["[data-theme=light]"],
        //         //     primary: "#63C49A",
        //         // }
        //     }
        // ]
    },
};
