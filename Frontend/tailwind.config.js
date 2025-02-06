/** @type {import('tailwindcss').Config} */
export default async function () {
  const tailwindcssAnimate = (await import("tailwindcss-animate")).default;

  return {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
      extend: {
        borderRadius: {
          lg: 'var(--radius)',
          md: 'calc(var(--radius) - 2px)',
          sm: 'calc(var(--radius) - 4px)'
        },
        colors: {}
      }
    },
    plugins: [tailwindcssAnimate()],
  };
}

