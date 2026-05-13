# Vexel

Проект Vexel — это React-приложение на TypeScript, собранное с помощью Vite и стилизованное через Tailwind CSS.

## Технологический стек

- React 19
- TypeScript 6
- Vite 8
- Tailwind CSS 3
- PostCSS
- ESLint
- React Router DOM 7
- Zustand
- Framer Motion
- Axios
- lightweight-charts
- SVGR для импорта SVG как React-компонентов
- Lucide React и @web3icons/react для иконок

## Основные плагины и пакеты

### Vite
- `@vitejs/plugin-react` — поддержка React и fast refresh
- `vite-plugin-svgr` — импорт SVG как React-компоненты

### Стилизация
- `tailwindcss` — утилитарный CSS-фреймворк
- `postcss` и `autoprefixer` — обработка CSS

### Линтинг и типизация
- `eslint` и `@eslint/js`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `typescript`
- `@types/react`, `@types/react-dom`, `@types/react-router-dom`, `@types/node`

## Скрипты

- `npm run dev` — запуск дев-сервера Vite
- `npm run build` — билд TypeScript + Vite
- `npm run lint` — запуск ESLint по проекту
- `npm run preview` — запуск предварительного просмотра собранного билда

## Папки и файлы конфигурации

- `vite.config.ts` — Vite-конфигурация с подключенными плагинами `@vitejs/plugin-react` и `vite-plugin-svgr`
- `tsconfig.json` — корневой TypeScript-конфиг, который собирает `tsconfig.app.json` и `tsconfig.node.json`
- `tailwind.config.js` — конфигурация Tailwind CSS
- `postcss.config.js` — конфигурация PostCSS
- `eslint.config.js` — правила ESLint для проекта

## Зависимости проекта

- `react`, `react-dom`
- `react-router-dom`
- `zustand`
- `axios`
- `framer-motion`
- `lightweight-charts`
- `lucide-react`
- `@web3icons/react`

## Быстрый старт

1. Установить зависимости:
   ```bash
   npm install
   ```
2. Запустить проект в режиме разработки:
   ```bash
   npm run dev
   ```
3. Собрать релизную версию:
   ```bash
   npm run build
   ```
