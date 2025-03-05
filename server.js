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

require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

app.post("/recommend", async (req, res) => {
    try {
        const { strength, flavor } = req.body;
        const prompt = `User likes ${strength} cigars with ${flavor} flavors. Suggest a cigar.`;

        const response = await axios.post(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText?key=${GEMINI_API_KEY}`,
            { prompt }
        );

        res.json({ recommendation: response.data.candidates[0].output });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch recommendation." });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));
