/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Lato"', 'sans-serif'],
            },
            colors: {
                'cine-black': '#121212',
                'cine-gold': '#D4AF37',
                'cine-paper': '#F9F9F9',
            }
        },
    },
    plugins: [require('@tailwindcss/typography'),],
}