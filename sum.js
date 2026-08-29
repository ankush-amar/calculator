const sumRequestHandeler = (res, req) => {
    console.log("I sumRequestHandeler", req.url);

    const body = []
    req.on('data', chunk => { 
        console.log(chunk);
        body.push(chunk);
    });

    req.on('end', () => {
        const bodyStr = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodyStr);
        const bodyObj = Object.fromEntries(params);
        console.log(bodyObj);
        const result = bodyObj.first + bodyObj.second;
        console.log(result);
    })

}
exports.sumRequestHandeler = sumRequestHandeler;