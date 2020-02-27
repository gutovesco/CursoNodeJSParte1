const http = require('http');

const servidor = http.createServer( function (req, res) {

    let html = ''
    if(req.url == '/'){
        html = `
        <html>
    <head>
    <meta charset="utf-8">
    </head>
    <body>
        <h1> Casa do codigo </h1>
    </body>
    </html>
    `;
    }
    res.end(html)

});

servidor.listen(3000);