const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write(`<html>
        <head><title>Enter Message</title></head>
        <body><form action="/message" method="POST"><input type="text" name="data"><button type="submit">Send</button></form></body>
        </html>`)
        return res.end();
    } else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const receivedData = parsedBody.split("=")[1];
            fs.writeFile('text.txt', receivedData, (error) => {
                if (!error) {
                    res.statusCode = 302;
                    res.setHeader('Location', '/');
                    return res.end();
                }
            });
        })
    }
    res.setHeader('Content-Type', 'text/html');
    res.write(`<html>
    <head><title>My Title</title></head>
    <body>Hello from First HTML Page</body>
    </html>`);
    res.end();
}

exports.requestHandler = requestHandler;