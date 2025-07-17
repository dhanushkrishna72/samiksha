// tailwind.config.js
export default {
    content: [
        "./index.html",
        "./sections/**/*.html",
        "./scripts/**/*.js"
    ],
    theme: {
        extend: {
            colors: {
                samiksha: {
                    blue: '#2563EB',      // Primary Blue
                    yellow: '#FACC15',    // Accent Yellow
                    darkBlue: '#1E293B',  // Deep Navy
                    lightGray: '#F9FAFB', // Very light background
                    dark: '#0F172A',      // Rich Dark - headings, contrast
                    gray: '#E5E7EB',      // Neutral gray - borders, background
                },
            },
            fontFamily: {
                sans: ["Poppins", "sans-serif"],
                body: ["Lato", "sans-serif"],
            },
            container: {
                center: true,
                padding: "1rem",
            },
        },
    },
    plugins: [],
}
  