const  express = require('express');
const cors = require('cors');
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.get('/api/hello', (req, res) => {

    const visitorName = req.query.visitor_name || 'Guest';

    const clientIp = req.ip;

    const response = {
        clientIp: clientIp,

        greetings: `Hello, ${visitorName}!`
    };

    res.json(response);
})


app.listen(port, () => {
    console.log(`server running on http://localhost:$(port)`);
});