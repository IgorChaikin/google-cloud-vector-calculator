const ResponsePayload = function(code, payload) {
    this.code = code;
    this.payload = payload;
}

exports.respondWithCode = function(code, payload) {
    return new ResponsePayload(code, payload);
}

const respondWithJson = exports.respondWithJson = function(response, firstArg, secondArg) {
    let code;
    let payload;

    if(firstArg && firstArg instanceof ResponsePayload) {
        respondWithJson(response, firstArg.payload, firstArg.code);
        return;
    }

    if(secondArg && Number.isInteger(secondArg)) {
        code = secondArg;
    }
    if(code && firstArg) {
        payload = firstArg;
    } else if(firstArg) {
        if(typeof firstArg === 'number') {
            payload = firstArg.toString();
        } else {
            payload = firstArg;
        }
    }

    if(!code) {
        code = 200;
    }
    if(typeof payload === 'object') {
        payload = JSON.stringify(payload, null, 2);
    }
    response.writeHead(code, {'Content-Type': 'application/json'});
    response.end(payload);
}
