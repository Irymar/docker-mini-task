# 🚀 Mini Dockerized Backend

Простий Node.js бекенд із PostgreSQL та Redis у Docker-середовищі.

## 🔧 Підготовка

1. Створи мережу (один раз):

```bash
docker network create api-prod
```

2. Створи `.env` файл у корені проєкту:

```env
PORT=3000
DB_URL=postgres://admin:password@db:5432/prod
POSTGRES_DB=prod
POSTGRES_USER=admin
POSTGRES_PASSWORD=password
```

## ▶️ Запуск

```bash
docker-compose up --build
```

Для повного перезапуску:

```bash
docker-compose down -v
docker-compose up --build
```

## 🌐 Доступ

API доступне на: [http://localhost:3000](http://localhost:3000)

## 📦 Сервіси

- `backend` — Node.js + Express  
- `db` — PostgreSQL 17  
- `redis` — Redis 7
