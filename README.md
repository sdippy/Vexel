# Vexel

Vexel — это React-приложение на TypeScript, собранное с помощью Vite и стилизованное через Tailwind CSS. Приложение предназначено для анализа криптовалютных рынков с интеграцией бэкенда на Express + Prisma.

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
- date-fns
- Express 5
- Prisma 6 + Prisma Client
- @tanstack/react-query

## Основные плагины и пакеты

### Vite

- `@vitejs/plugin-react` — поддержка React и fast refresh
- `vite-plugin-svgr` — импорт SVG как React-компоненты

### Стилизация

- `tailwindcss` — утилитарный CSS-фреймворк
- `postcss` и `autoprefixer` — обработка CSS

### Бэкенд

- `express` — серверный фреймворк
- `cors` — CORS-заголовки
- `prisma` — ORM для работы с базой данных
- `@prisma/client` — клиент Prisma

### Линтинг и типизация

- `eslint` и `@eslint/js`
- `eslint-plugin-react-hooks`
- `eslint-plugin-react-refresh`
- `typescript`
- `@types/react`, `@types/react-dom`, `@types/react-router-dom`, `@types/express`, `@types/cors`, `@types/node`

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
- `prisma.config.ts` — конфигурация Prisma
- `prisma/schema.prisma` — схема базы данных

## Зависимости проекта

- `react`, `react-dom`
- `react-router-dom`
- `zustand`
- `axios`
- `framer-motion`
- `lightweight-charts`
- `lucide-react`
- `@web3icons/react`
- `date-fns`
- `@tanstack/react-query`
- `express`, `cors`
- `prisma`, `@prisma/client`

## Структура проекта

```
src/
├── app/                    # Глобальные настройки приложения
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── pages/                  # Страницы приложения
│   └── Dashboard.tsx
├── features/               # Фичи приложения
├── shared/                 # Общие ресурсы
│   ├── components/         # Переиспользуемые компоненты
│   │   ├── ui/            # UI-компоненты (dashboard)
│   │   └── layout/        # Layout-компоненты (NavigationLayout)
│   ├── hooks/              # Общие хуки
│   │   └── useMarketIntelligence.ts
│   ├── utils/              # Утилиты
│   ├── types/              # Глобальные типы
│   │   ├── index.ts
│   │   └── itemStructureProps.ts
│   ├── services/           # API-сервисы
│   │   └── fetchMarketIntelligience.ts
│   └── assets/             # Ассеты (иконки, изображения)
├── router/                 # Маршрутизация
│   └── index.tsx
├── server/                 # Серверная часть
│   ├── server.ts
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   └── db/
│       └── prisma.ts
└── store/                  # Глобальное состояние
    ├── modal.store.ts
    └── popover.store.ts
```
