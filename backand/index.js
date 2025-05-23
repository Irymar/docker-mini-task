const { Client } = require("pg");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

function connectWithRetry() {
    const client = new Client({ connectionString: process.env.DB_URL });

    console.log("Спроба підключення до PostgreSQL...");

    client.connect()
        .then(() => {
            console.log("Підключено до бази даних!");

            // Запускаємо сервер тільки після підключення до БД
            app.listen(port, () => {
                console.log(`Сервер запущено на порту ${port}`);
            });

            // Додаємо простий маршрут для перевірки
            app.get("/", (req, res) => {
                res.json({ message: "API працює!" });
            });
        })
        .catch(err => {
            console.error("Помилка підключення до БД:", err);
            console.log("Повторна спроба через 5 секунд...");
            setTimeout(connectWithRetry, 5000);
        });
}

// Почати спроби підключення
connectWithRetry();