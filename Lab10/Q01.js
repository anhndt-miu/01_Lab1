import express from 'express'
import url from 'url';
import path from 'path';

const app = express()
app.set('port', process.env.PORT || 3000);
const port = app.get('port');

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get(['/', '/home'], (req, res, next) => {
    res.set('Content-Type', 'text/html')
    res.status(200).send('Welcome to my website')
});

app.get('/image', (req, res) => {
    res.set('Content-Type', 'image/webp')
    res.status(200).sendFile(path.join(__dirname, 'res', 'capybara.webp'))
});

app.get('/pdf', (req, res) => {
    res.set('Content-Type', 'application/pdf')
    res.status(200).sendFile(path.join(__dirname, 'res', 'sample.pdf'))
});

app.get('/about', (req, res, next) => {
    res.set('Content-Type', 'text/plan')
    res.status(200).sendFile(path.join(__dirname, 'res', 'hello.txt'))
});

app.use((req, res, next) => {
    res.set('Content-Type', 'text/html')
    res.status(404).send('Page not found')
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});
