# Деплой через Docker

## Быстрый старт

### 1. Сборка образа

```bash
docker build -t module-team-app .
```

### 2. Запуск контейнера

```bash
docker run -p 3000:3000 module-team-app
```

Или используйте docker-compose:

```bash
docker-compose up -d
```

## Использование docker-compose (рекомендуется)

### Запуск

```bash
docker-compose up -d
```

### Остановка

```bash
docker-compose down
```

### Просмотр логов

```bash
docker-compose logs -f
```

### Пересборка после изменений

```bash
docker-compose up -d --build
```

## Деплой на сервер

### 1. Скопируйте файлы на сервер

```bash
scp -r . user@your-server:/path/to/app
```

### 2. На сервере выполните:

```bash
cd /path/to/app
docker build -t module-team-app .
docker run -d -p 3000:3000 --name module-team module-team-app
```

### 3. Использование с nginx (опционально)

Если используете nginx как reverse proxy:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Переменные окружения

Если нужно добавить переменные окружения, создайте `.env` файл или используйте:

```bash
docker run -p 3000:3000 --env-file .env module-team-app
```

Или в docker-compose.yml:

```yaml
environment:
  - NODE_ENV=production
  - NEXT_PUBLIC_API_URL=https://api.example.com
```

## Полезные команды

### Просмотр запущенных контейнеров

```bash
docker ps
```

### Остановка контейнера

```bash
docker stop module-team
```

### Удаление контейнера

```bash
docker rm module-team
```

### Просмотр логов

```bash
docker logs -f module-team
```

### Вход в контейнер

```bash
docker exec -it module-team sh
```
