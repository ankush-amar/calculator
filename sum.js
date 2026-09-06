const sumRequestHandeler = (req, res) => {
    console.log("In Sum Request Handeler", req.url);
   
    const body = []
    req.on('data', chunk => { 
        body.push(chunk);
    });

    req.on('end', () => {
        const bodyStr = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodyStr);
        const bodyObj = Object.fromEntries(params);
        console.log(bodyObj);
        const result = Number(bodyObj.first) + Number(bodyObj.second);
        console.log(result);
        res.write(result.toString());
        return res.end();
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
                <head>
                    <title>calculating</title>
                </head>
                <body>
                    <h3>Your Sum is ${result}</h3>
                <body>
        </html>
       `);
        return res.end();
    });

}
exports.sumRequestHandeler = sumRequestHandeler;