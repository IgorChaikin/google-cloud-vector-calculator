const axios = require('axios');

exports.sendRequest = function (url, body, name = '[UNKNOWN]') {
    return new Promise(async function (resolve, reject) {
        console.log('Received arguments: ', Object.keys(body)
            .map((key)=>`${key}=${JSON.stringify(body[key])}`).join(', '))
        try {
            const requestParam = {
                a: body.a,
                b: body.b
            };

            console.log(`Body of request to cloud function "${name}": `, requestParam);

            const answer = await axios.put(url, requestParam);
            if (answer.status !== 200) {
                console.error(`Cloud function "${name}" responded with error: `, answer);
                reject({code: 400, message: JSON.stringify(answer)});
            }

            const response = answer.data;
            console.log(`Answer from cloud function "${name}": `, response);
            resolve(response);

        } catch (e) {
            console.error(`Error occurred while running cloud function "${name}": `, e.message);
            reject({code: 400, message: e.message})
        }
    });
}
