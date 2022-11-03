import process from 'node:process';
import express from 'express';
import employeeRouter from './routes/employee.js';


const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3200;
const app = express();


app.use(express.json());

app.use('/employees', employeeRouter);

app.get('/', (_request, response) => {
    response.send('Welcome to start page');
});

app.use('*', (_request, response, _next) => {
    response.status(404).json({
        error: '404 Not Found',
    });
});

function startApp() {
    try {
        app.listen(PORT, HOST, () => {
            console.log(`Server listening at http://${HOST}:${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
}

startApp();
