const path = require('path');
const http = require('http');

const oas3Tools = require('oas3-tools');
const serverPort = process.env.PORT || 8080;

const options = {
    routing: {
        controllers: path.join(__dirname, './handlers')
    },
};

const expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options); //!!!
const app = expressAppConfig.getApp();

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
    console.log(`Server is listening on http://localhost:${serverPort}`);
    console.log(`Swagger-ui is available on http://localhost:${serverPort}/docs`);
});
