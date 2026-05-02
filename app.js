const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({ message: 'My CI/CD pipeline works succesfully ...............', time: new Date() });
});

app.get('/health', (req, res) => {
    res.json({ status: 'OK' });
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
})
