const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Discord Webhook URL
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1316683412303777933/aVVFSVnwWBun0TxxIJYpKJw2ilj_LHyKSOhslDmuHLFcdiVQj9hgXgmIY70YvqLBY94u';

// Middleware
app.use(express.json());

// Route สำหรับการซื้อสินค้า
app.post('/buy', async (req, res) => {
    try {
        // ส่งข้อความไปที่ Discord Webhook
        await axios.post(DISCORD_WEBHOOK_URL, {
            content: 'มีคนซื้อสินค้า!'
        });

        res.status(200).send('Message sent to Discord');
    } catch (error) {
        console.error('Error sending message to Discord:', error);
        res.status(500).send('Error');
    }
});

// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
