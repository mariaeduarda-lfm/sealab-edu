// ============================================
// Seazone AI Learning - Simple Server
// ============================================

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const DIST_DIR = __dirname;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

function sendFile(filePath, res) {
    const mimeType = MIME_TYPES[path.extname(filePath)] || 'application/octet-stream';
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('Server Error');
            return;
        }
        res.writeHead(200, { 'Content-Type': mimeType, 'Cache-Control': 'no-cache' });
        res.end(content);
    });
}

const server = http.createServer((req, res) => {
    const requestPath = decodeURIComponent((req.url || '/').split('?')[0]);
    let filePath = requestPath === '/' ? path.join(DIST_DIR, 'index.html') : path.join(DIST_DIR, requestPath);

    fs.stat(filePath, (err, stats) => {
        if (!err && stats.isFile()) {
            sendFile(filePath, res);
            return;
        }

        if (!err && stats.isDirectory()) {
            const indexPath = path.join(filePath, 'index.html');
            fs.stat(indexPath, (indexErr, indexStats) => {
                if (!indexErr && indexStats.isFile()) {
                    sendFile(indexPath, res);
                    return;
                }
                res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end('Not Found');
            });
            return;
        }

        if (!path.extname(filePath)) {
            sendFile(path.join(DIST_DIR, 'index.html'), res);
            return;
        }

        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Not Found');
    });
});

server.listen(PORT, () => {
    console.log(`
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   🚀 SeaLab Server                                        ║
║                                                           ║
║   Abra em: http://localhost:${PORT}                         ║
║                                                           ║
║   Use este servidor para garantir navegação, tema         ║
║   escuro e módulos JS funcionando corretamente.           ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
    `);
});

module.exports = server;
