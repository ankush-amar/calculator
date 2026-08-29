const requestHandeler = (req , res) => {
    console.log(req.url, req.method);

    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
                <head>
                    <title>Keep Practicing</title>
                </head>
                <body>
                    <h1>Calculator Home</h1>
                    <a href="/calculator">Go to Calculator</a>
                <body>
            </html>
        `);
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
                <head>
                    <title>Keep Practicing</title>
                </head>
                <body>
                    <h1>404 page does not exist</h1>
                    <a href="/calculator">Go to Calculator</a>
                <body>
            </html>
        `);
        return res.end();

}
exports.requestHandeler = requestHandeler;