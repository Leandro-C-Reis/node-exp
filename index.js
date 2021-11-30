const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('New request')
    return res.send('Hello internet!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on port:', port));