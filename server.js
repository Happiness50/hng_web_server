import express from 'express';
import users from './routes/users.js';
const port = process.env.PORT || 3000;


const app = express();

// Body parser middleware
app.use(express.json()); // take care to submit raw json
app.use(express.urlencoded({ extended: false }));

// Logger Middleware
app.use(logger);

// Routes
app.use('/api/users', users);

// Error Handler
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
});