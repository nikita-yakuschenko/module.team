# Module.Team

Лендинг-страница для команды Модуль с информацией о коллаборации с Авангард Строй.

## О проекте

Сайт представляет семейство программных решений Модуль (Пульс, Поток, Визор, План), разрабатываемых для команды Авангард Строй.

## Технологии

- **Next.js 16.1.2** - React фреймворк с App Router
- **React 19.2.3** - UI библиотека
- **TypeScript** - типизация
- **Tailwind CSS 4** - стилизация
- **shadcn/ui** - UI компоненты

## Разработка

### Установка зависимостей

```bash
npm install
```

### Запуск dev сервера

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### Сборка для production

```bash
npm run build
npm start
```

## Деплой

Проект настроен для деплоя через **Dokploy** с использованием Docker.

Подробные инструкции:
- [Деплой через Dokploy](./README.DOKPLOY.md)
- [Деплой через Docker](./README.DOCKER.md)

## Структура проекта

```
.
├── app/                    # Next.js App Router
│   ├── page.tsx           # Главная страница
│   ├── layout.tsx         # Корневой layout
│   └── globals.css        # Глобальные стили
├── components/            # React компоненты
│   └── ui/               # UI компоненты
│       ├── animated-text.tsx
│       ├── collaboration-badge.tsx
│       └── twitter-testimonial-cards.tsx
├── public/               # Статические файлы
│   ├── avatars/         # Аватары компаний
│   └── images/          # Изображения
├── Dockerfile           # Docker конфигурация
└── docker-compose.yml   # Docker Compose
```

## Лицензия

© module.team 2025-2026
