// Question2: Create a web server using http module:

// If the path is ‘/image’ and method is GET, send a response of an image to any client. Set an appropriate content-type for your image.
// If the path is ‘/pdf’ and method is GET, send a response of a pdf file to any client. Set a Content-type as 'application/pdf'.
// If the path is ‘/about’ and method is GET, send a response of a txt file to any client. Set a Content-type as 'text/plain'.
// If the path is ‘/home’ or ‘/’ and method is GET, send “Welcome to my website” text.
//     Otherwise return not found with status code 404.


import http from 'http'
import fs from 'fs'

const server = http.createServer((req, res) => {
    const url = req.url
    const method = req.method
    res.setHeader('Content-Type', 'text/html');

    if (url == '/' || url == '/home') {
        res.writeHead(200)
        res.end('Welcome to my website');
    } else if (url == '/image') {
        res.writeHead(200, {'Content-Type': 'image/webp'});
        const imageStream = fs.createReadStream('./res/capybara.webp');
        imageStream.pipe(res);
    } else if (url == '/pdf') {
        res.writeHead(200, {'Content-Type': 'application/pdf'});
        const pdfStream = fs.createReadStream('./Q01.pdf');
        pdfStream.pipe(res);
    } else if (url == '/about') {
        res.writeHead(200, {'Content-Type': 'text/plan'});
        var text = fs.readFileSync('./res/hello.txt', 'utf-8');
        res.end(text);
    } else {
        res.writeHead(404);
        res.end('Page not found');
    }
})

server.listen(8000, () => {
    console.log('Server running on port 8000...')
})