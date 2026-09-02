const {sumRequestHandeler} = require('./sum');
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
                    <a href= "/calculator" > Go to Calculator </a>
                <body>
            </html>
        `);
        return res.end();

    }else if(req.url.toLowerCase() === '/calculator') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
                <head>
                    <title> Keep Practicing </title>
                </head>
                <body>
                    <h1>Start calculating</h1>
                    <form action="./calculator-result" method="POST">
                        <input type="text"  placeholder="First number" name="first"/>
                        <input type="text"  placeholder="Second number" name="second"/>
                        <input type="submit" value"submit">
                    </form>
                <body>
            </html>
        `);
        return res.end();

    }else if(req.url.toLowerCase() === '/calculator-result' && req.method === "POST") {
       
        return sumRequestHandeler(req,res);
;    }


    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
            <head>
                <title>Keep Practicing</title>
            </head>
            <body>
                <h1>ERROR</h1>
                <h3> -:404:- page does not exist</h3>
            <body>
        </html>
    `);
    return res.end();

}
exports.requestHandeler = requestHandeler;