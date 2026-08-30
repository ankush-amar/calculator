const http = require('http');

const {requestHandeler} = require('./handeler');

const server = http.createServer(requestHandeler);

const PORT = 3000;
server.listen(PORT , () => {
    console.log(`Server running on adderess http://localhost:${PORT}`);
});