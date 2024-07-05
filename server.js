const express = require('express');
const Route = require('./routes/users.js');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;


const app = express();

app.use('/api', Route);

// Body parser middleware
app.use(express.json()); // take care to submit raw json
app.use(express.urlencoded({ extended: false }));


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});