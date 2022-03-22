import process from 'node:process';
import express from 'express';
import employeeRouter from './routes/employee.js';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;
const app = express();

app.disable('x-powered-by');

app.use(express.json());
app.use('/employees', employeeRouter);
app.use((_request, response, _next) => {
    response.status(404).json({
        error: '404 Not Found',
    });
});

app.listen(PORT, HOST, () => {
    console.log(`Server listening at http://${HOST}:${PORT}`);
});
