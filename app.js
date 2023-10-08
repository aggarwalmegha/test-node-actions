const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('This is node test project!');
    });

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}...`);
    });


