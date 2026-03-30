/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'], // tailwind가 스타일을 적욜할 파일 경로
  theme: {
    extend: {
      colors: {
        primary: '#15C666', // 메인 초록색
      },
    },
  },
  plugins: [],
};
