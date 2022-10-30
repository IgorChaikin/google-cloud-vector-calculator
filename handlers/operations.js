const { sendRequest } = require('../google-request-sender');
const jsonService = require('../json-service');

module.exports.add = function addElement (req, res, next, body) {
    sendRequest('https://europe-west6-verification-364518.cloudfunctions.net/add3', body, 'add3')
        .then(function (response) {
            jsonService.respondWithJson(res, response);
        })
        .catch(function (response) {
            jsonService.respondWithJson(res, response, 400);
        });
};

module.exports.cross = function addElement (req, res, next, body) {
    sendRequest('https://europe-west6-verification-364518.cloudfunctions.net/cross3', body, 'cross3')
        .then(function (response) {
            jsonService.respondWithJson(res, response);
        })
        .catch(function (response) {
            jsonService.respondWithJson(res, response, 400);
        });
};

module.exports.dot = function addElement (req, res, next, body) {
    sendRequest('https://europe-west6-verification-364518.cloudfunctions.net/dot3', body, 'dot3')
        .then(function (response) {
            jsonService.respondWithJson(res, response);
        })
        .catch(function (response) {
            jsonService.respondWithJson(res, response, 400);
        });
};

