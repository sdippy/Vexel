# Развертывание на Vercel

## Подготовка

1. **Установите Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Свяжите проект с Vercel:**
   ```bash
   vercel login
   vercel link
   ```

## Конфигурация переменных окружения

На Vercel нужно установить переменную `DATABASE_URL`:

1. Перейдите в [панель управления Vercel](https://vercel.com/dashboard)
2. Выберите ваш проект
3. Перейдите в **Settings → Environment Variables**
4. Добавьте переменную:
   - **Name:** `DATABASE_URL`
   - **Value:** Ваша строка подключения PostgreSQL
   - **Environments:** Production, Preview, Development

5. Нажмите **Save**

Пример:
```
postgresql://user:password@host:port/database?sslmode=require
```

## Миграции БД

Vercel использует serverless функции, поэтому миграции должны выполняться вручную или через CI/CD:

```bash
npx prisma migrate deploy
```

Или добавьте в `package.json` в `postinstall`:
```json
{
  "postinstall": "prisma generate && prisma migrate deploy"
}
```

## Деплой

```bash
vercel deploy --prod
```

Или просто запушьте в GitHub, и Vercel развернет автоматически.

## Проверка

После деплоя проверьте API:
```
https://your-project.vercel.app/api/market-news?limit=10&order=desc
```

Если ошибка 500, проверьте:
1. Логи: `vercel logs` 
2. Переменную `DATABASE_URL` установлена
3. БД доступна из Vercel
