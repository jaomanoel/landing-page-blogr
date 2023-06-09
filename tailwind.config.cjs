/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            ubuntu: ["Ubuntu", "sans-serif"],
            overpass: ["Overpass", "sans-serif"],
        },
        fontSize: {
            xs: "1.2rem", // 12px
            sm: "1.4rem", // 14px
            base: "1.6rem", // 16px
            lg: "1.8rem", // 18px
            xl: "2rem", // 20px
            "2xl": "2.4rem", // 24px
            "3xl": "3rem", // 30px
            "4xl": "3.6rem", // 36px
            "5xl": "4.8rem", // 48px
            "6xl": "6rem", // 60px
            "7xl": "7.2rem", // 72px
            "8xl": "9.6rem", // 96px
            "9xl": "12.8rem", // 128px
        },
        extend: {
            spacing: {
                2: ".2rem",
                4: ".4rem",
                8: ".8rem",
                12: "1.2rem",
                16: "1.6rem",
                18: "1.8rem",
                20: "2rem",
                24: "2.4rem",
                28: "2.8rem",
                30: "3rem",
                36: "3.6rem",
                38: "3.8rem",
                40: "4rem",
                48: "4.8rem",
                56: "5.6rem",
                58: "5.8rem",
                60: "6rem",
                62: "6.2rem",
                64: "6.4rem",
                75: "7.5rem",
                77: "7.7rem",
                90: "9rem",
                100: "10rem",
                120: "12rem",
                140: "14rem",
                160: "16rem",
                190: "19rem",
                200: "20rem",
                220: "22rem",
                240: "24rem",
                250: "25rem",
                280: "28rem",
                293: "29.3rem",
                300: "30rem",
                336: "33.6rem",
                350: "35rem",
                400: "40rem",
                408: "40.8rem",
                410: "41rem",
                450: "45rem",
                500: "50rem",
                600: "60rem",
                620: "62rem",
                650: "65rem",
                623: "62.3rem",
                800: "80rem",
                920: "92rem",
                1280: "128rem",
            },
            lineHeight: {
                "10px": "1rem",
                "15px": "1.5rem",
                "20px": "2rem",
                "25px": "2.5rem",
                "30px": "3rem",
                "35px": "3.5rem",
                "37px": "3.7rem",
                "40px": "4rem",
            },
            colors: {
                "light-red": "hsl(356, 100%, 66%)",
                "very-light-red": "hsl(355, 100%, 74%)",
                "very-dark-blue": "hsl(208, 49%, 24%)",
                "very-dark-gray": "hsl(237, 17%, 21%)",
                "very-dark-desaturated-blue": "hsl(237, 23%, 32%)",
                white: "hsl(0, 0%, 100%)",
                "grayish-blue": "hsl(240, 2%, 79%)",
                "very-dark-black-blue": "hsl(240, 10%, 16%)",
                "g-very-light-red": "hsl(13, 100%, 72%)",
                "g-light-red": "hsl(353, 100%, 62%)",
            },
            maxWidth: {
                default: "1140px",
            },
        },
    },
    plugins: [],
};
