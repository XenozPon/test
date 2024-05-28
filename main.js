const fs = require('fs');

const server = http.createServer((req, res) => {
    const userIp = req.connection.remoteAddress;
    const logMessage = `IP пользователя, зашедшего на сайт: ${userIp}\n`;

    // Записываем IP-адрес в текстовый файл
    fs.appendFile('ip_log.txt', logMessage, (err) => {
        if (err) {
            console.error('Ошибка при записи IP-адреса:', err);
        } else {
            console.log('IP-адрес успешно записан в ip_log.txt');
        }
    });

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Спасибо за посещение сайта!');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
