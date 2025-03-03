const express = require('express');
const WebSocket = require('ws');
const cors = require('cors');

const app = express();
const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });

let offer = null;
let answer = null;

app.use(cors());
app.use(express.json());

app.post('/offer', (req, res) => {
    offer = req.body.offer;
    res.json({ success: true });
});

app.get('/offer', (req, res) => {
    res.json({ offer });
});

app.post('/answer', (req, res) => {
    answer = req.body.answer;
    res.json({ success: true });
});

app.get('/answer', (req, res) => {
    res.json({ answer });
});

wss.on('connection', ws => {
    ws.on('message', message => {
        wss.clients.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });
});

server.listen(5000, () => console.log('Server running on port 5000'));
